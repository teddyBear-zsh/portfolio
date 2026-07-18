export interface ToolImage {
  src: string;   // e.g. "/assets/tools/cliparch-screenshot.png"
  alt: string;
  caption?: string;
}

export const TOOL_CATEGORIES = ["CI/CD", "Config", "Scripts"] as const;
export type ToolCategory = (typeof TOOL_CATEGORIES)[number];

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
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

// Consolidating: these configs currently live scattered across my own system,
// not yet inside the teddy-tools monorepo. No entries until that happens —
// see the Lab section's status banner.
export const tools: Tool[] = [];
