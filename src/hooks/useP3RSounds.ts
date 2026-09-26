"use client";

import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";

type SoundName = "hover" | "click";

const sources: Record<SoundName, string> = {
  hover: "/sounds/hover.mp3",
  click: "/sounds/click.mp3",
};

export function useP3RSounds() {
  const sounds = useRef<Partial<Record<SoundName, Howl>>>({});
  const hasInteracted = useRef(false);

  useEffect(() => {
    const markInteraction = () => {
      hasInteracted.current = true;
    };

    (Object.keys(sources) as SoundName[]).forEach((name) => {
      sounds.current[name] = new Howl({
        src: [sources[name]],
        onloaderror: (_id, error) => {
          console.error(`Failed to load P3R ${name} sound (${sources[name]}).`, error);
        },
        onplayerror: (_id, error) => {
          console.error(`Failed to play P3R ${name} sound (${sources[name]}).`, error);
        },
      });
    });
    document.addEventListener("pointerdown", markInteraction, { once: true });
    document.addEventListener("keydown", markInteraction, { once: true });

    return () => {
      document.removeEventListener("pointerdown", markInteraction);
      document.removeEventListener("keydown", markInteraction);
      Object.values(sounds.current).forEach((sound) => sound?.unload());
      sounds.current = {};
    };
  }, []);

  const play = useCallback((name: SoundName) => {
    if (!hasInteracted.current) return;
    sounds.current[name]?.play();
  }, []);

  return {
    playHover: useCallback(() => play("hover"), [play]),
    playClick: useCallback(() => play("click"), [play]),
  };
}
