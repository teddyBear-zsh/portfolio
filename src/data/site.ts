// Global site + personal info.
// Edit this file to update your name, role, bio, and social links everywhere at once.

export const SITE = {
  name: "Your Name",
  role: "Fullstack Software Engineer",
  tagline: "I build fast, reliable web apps end to end.",
  location: "Zapopan, Jalisco, MX",
  email: "you@example.com",
  url: "https://yourdomain.dev",
  description:
    "Personal portfolio of Your Name — fullstack software engineer specializing in Angular, TypeScript, and Node.js.",
};

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Medium", url: "https://medium.com/@yourusername", icon: "medium" },
  { name: "Email", url: "mailto:you@example.com", icon: "mail" },
] satisfies { name: string; url: string; icon: string }[];

// Epoch for the Hero's "T+" mission-elapsed-time counter.
// Change this to whatever launch date makes sense to you —
// e.g. the day you publish the site, or the day you started this career path.
export const MISSION_EPOCH = "2026-06-15T00:00:00Z";


export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
];
