export interface ToolImage {
  src: string;   // e.g. "/assets/tools/cliparch-screenshot.png"
  alt: string;
  caption?: string;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  // Detail page fields
  problem?: string;
  solution?: string;
  design?: string;
  highlights?: string[];
  status?: string;
  images?: ToolImage[];
}

export const tools: Tool[] = [
  {
    slug: "aws-resource-tagger",
    name: "AWS Resource Tagger",
    description: "CLI utility to bulk tag AWS resources based on cost-center definitions.",
    category: "Script",
    technologies: ["Python", "Boto3"],
    github: "https://github.com",
    problem: "Large AWS accounts accumulate hundreds of resources with inconsistent or missing tags, making cost allocation by team or project nearly impossible.",
    solution: "A Python CLI that reads a YAML config file mapping cost centers to resource patterns. It uses Boto3 to scan all supported resource types across regions and applies the correct tags in bulk, with a dry-run mode to preview changes before applying.",
    design: "The script uses a plugin architecture where each AWS service (EC2, RDS, Lambda, S3…) is handled by its own tagger module. A central registry discovers and runs all taggers. The YAML schema allows regex patterns on resource names and ARNs for flexible matching.",
    highlights: [
      "Supports 10+ AWS resource types across all regions",
      "Dry-run mode prevents accidental changes",
      "Config-driven: no code changes needed for new cost centers",
      "Generates a CSV report of all tagging operations"
    ],
    status: "Active"
  },
  {
    slug: "cliparch",
    name: "ClipArch",
    description: "Custom clipboard manager for text and images on Arch Linux. Works with GNOME and Hyprland.",
    category: "App",
    technologies: ["Python", "CSS"],
    github: "https://github.com/teddyBear-zsh/clipArch.git",
    problem: "Most clipboard managers on Linux are either too heavyweight, don't work across both GNOME and Hyprland, or have poor keyboard-driven UX for power users.",
    solution: "A lightweight Python clipboard manager that hooks into the system clipboard via xclip/wl-clipboard, stores history in SQLite, and surfaces it through a minimal GTK popup triggered by a keybind. Works seamlessly on both X11 and Wayland.",
    design: "The daemon runs in the background and listens for clipboard change events. History is persisted in a local SQLite database. The UI is a small GTK window styled with CSS, designed to feel native on both GNOME and Hyprland without any heavy dependencies.",
    highlights: [
      "Works on X11 (GNOME) and Wayland (Hyprland) with the same binary",
      "Keyboard-first UX: open, search, paste — all without a mouse",
      "Stores text and images in clipboard history",
      "SQLite-backed history survives reboots"
    ],
    status: "Active"
  },
  {
    slug: "infra-cost-dashboard",
    name: "Infra Cost Dashboard",
    description: "Internal tool to monitor cloud spend and set budget alerts.",
    category: "App",
    technologies: ["Vue.js", "Express", "AWS Cost Explorer API"],
    github: "https://github.com",
    problem: "Engineering teams lack real-time visibility into cloud spending per service or environment. By the time the monthly bill arrives, overspending has already happened.",
    solution: "A web dashboard that queries the AWS Cost Explorer API daily, aggregates spend by service and environment tag, and displays trends over time. Teams can set budget thresholds and receive Slack alerts when costs approach the limit.",
    design: "The backend is an Express server that caches Cost Explorer API responses in Redis to avoid hitting API rate limits. The Vue.js frontend uses Chart.js for interactive spend graphs. Budget rules are stored in DynamoDB and evaluated by a daily Lambda function.",
    highlights: [
      "Daily cost breakdown by service, team, and environment",
      "Slack alerts when budget thresholds are breached",
      "Redis caching keeps Cost Explorer API calls within free tier limits",
      "Historical trend view up to 12 months"
    ],
    status: "Active"
  }
];
