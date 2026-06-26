export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

// PLACEHOLDER posts — swap for real write-ups once you have client stories to tell.
export const JOURNAL: JournalPost[] = [
  {
    slug: 'why-local-businesses-skip-websites',
    title: 'Why most local businesses still don\'t have a website',
    excerpt: 'It\'s rarely cost. It\'s almost always "I don\'t know where to start" — and that\'s the gap we fill.',
    date: '2026-04-02',
  },
  {
    slug: 'what-makes-a-site-load-fast',
    title: 'What actually makes a site feel fast',
    excerpt: 'Hint: it\'s not your hosting plan. It\'s image weight, font loading, and how much JS you ship on the first paint.',
    date: '2026-03-18',
  },
  {
    slug: 'pricing-a-website-honestly',
    title: 'How we price a website honestly',
    excerpt: 'No vague "it depends." Here\'s exactly what moves the number up or down.',
    date: '2026-02-27',
  },
];
