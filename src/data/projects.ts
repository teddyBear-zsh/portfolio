export interface ProjectImage {
  src: string;   // e.g. "/assets/projects/cloud-architect-sandbox-diagram.png"
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  status: "shipped" | "in-progress";
  technologies?: string[];
  github?: string;
  demo?: string;
  // Detail page fields
  problem?: string;
  solution?: string;
  design?: string;
  highlights?: string[];
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "receipts-auto",
    name: "receipts-auto",
    description: "A fully serverless pipeline that ingests, parses, and stores receipt data with real-time observability.",
    status: "shipped",
    technologies: ["Go", "React", "Prometheus", "Grafana"],
    github: "https://github.com",
    problem: "Small businesses need to digitize paper receipts and track expenses without paying for heavyweight SaaS solutions. Existing tools are expensive or require manual data entry.",
    solution: "A serverless pipeline where receipts are uploaded to S3, triggering a Go Lambda that uses OCR to extract line items and totals. Parsed data lands in DynamoDB and is exposed via a React dashboard. Prometheus and Grafana provide full observability on processing latency and error rates.",
    design: "The system is event-driven end to end. S3 upload → SQS → Lambda (Go) → DynamoDB. The Go Lambda was chosen for its low cold-start time and efficient memory use. The React frontend queries a GraphQL API backed by Lambda. Grafana dashboards are pre-built and deployed as code.",
    highlights: [
      "Processes receipts in under 3 seconds end-to-end",
      "~$0 operational cost under 10k receipts/month (within free tier)",
      "Real-time Grafana dashboard with processing metrics",
      "OCR accuracy > 95% on printed receipts"
    ]
  },
  {
    slug: "cliparch",
    name: "clipArch",
    description: "Custom clipboard manager for text and images on Arch Linux. Works with GNOME and Hyprland.",
    status: "shipped",
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
    ]
  },
  {
    slug: "cherrypick",
    name: "cherrypick",
    description: "Terminal UI for interactive git cherry-picking, lazygit-inspired.",
    status: "in-progress"
  }
];
