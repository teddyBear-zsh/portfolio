export interface NoteLink {
  label: string;
  url: string;
}

export interface Note {
  date: string; // YYYY-MM-DD
  tag: "FIX" | "SANDBOX" | "NOTE";
  text: string;
  links?: NoteLink[];
}

export const notes: Note[] = [
  {
    date: "2026-07-14",
    tag: "FIX",
    text: "GNOME's Mutter doesn't implement wlr-data-control, switched to GTK4's native Gdk.Clipboard signal."
  },
  {
    date: "2026-07-10",
    tag: "SANDBOX",
    text: "Cloud Architect Sandbox: testing CSV→chart generation as a Tableau/Power BI alternative, still pivoting the idea."
  },
  {
    date: "2026-06-30",
    tag: "NOTE",
    text: "Idempotency on duplicate writes — the incident that became the article.",
    links: [
      { label: "post", url: "https://medium.com/@teddyzsh/do-you-manage-payment-systems-idempotency-is-a-term-you-should-know-a1cea4365c43" }
    ]
  }
];
