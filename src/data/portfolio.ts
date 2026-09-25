export interface PortfolioProject {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "minecraft-server-architecture",
    title: "Minecraft Server Architecture",
    role: "Server Architect",
    period: "2024",
    description: "Designed and configured a modular Minecraft server architecture for scalable multiplayer experiences.",
    techStack: ["Fabric", "Forge", "Prism", "HeppyCloud"],
  },
  {
    id: "roblox-player-data-visualization",
    title: "Roblox Player Data Visualization",
    role: "Data Visualization Developer",
    period: "2024",
    description: "Built visual reports that turn Roblox player activity data into clear, actionable insights.",
    techStack: ["Data Visualization", "Charts"],
  },
  {
    id: "samsung-innovation-campus-slekers",
    title: "Samsung Innovation Campus Batch 8 - Team SLEKERS",
    role: "Team Member",
    period: "2024",
    description: "Collaborated on a technology project focused on structured logic systems and effective project delivery.",
    techStack: ["Logic Systems", "Project Management"],
  },
  {
    id: "idcamp-2024-data-science",
    title: "IDCamp 2024 Data Science",
    role: "Data Science Participant",
    period: "2024",
    description: "Developed foundational data science skills through practical analysis and machine learning coursework.",
    techStack: ["Data Science"],
  },
  {
    id: "pt-perkebunan-nusantara-iv-regional-3",
    title: "Internship at PT Perkebunan Nusantara IV Regional 3",
    role: "Intern",
    period: "Aug-Dec 2024",
    description: "Supported digital and data-focused work during an internship at PT Perkebunan Nusantara IV Regional 3.",
    techStack: ["Data Analysis", "Project Support"],
  },
];
