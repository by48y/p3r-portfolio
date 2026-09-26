let interactionReady = false;
let listenersAttached = false;

function enableAfterInteraction() {
  if (listenersAttached || typeof window === "undefined") return;
  listenersAttached = true;
  const enable = () => {
    interactionReady = true;
    window.removeEventListener("pointerdown", enable);
    window.removeEventListener("keydown", enable);
  };
  window.addEventListener("pointerdown", enable);
  window.addEventListener("keydown", enable);
}

export function playUISound(type: "hover" | "click" | "transition") {
  if (typeof window === "undefined") return;
  enableAfterInteraction();
  if (!interactionReady) return;

  const audio = new Audio(`/sounds/${type}.mp3`);
  audio.volume = 0.5;
  audio.play().catch(() => {});
}
