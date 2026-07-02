export interface AboutPoint {
  slug: string;
  title: string;
  body: string;
}

export const ABOUT_POINTS: AboutPoint[] = [
  {
    slug: 'why-we-exist',
    title: 'Why most businesses need more than a website',
    body: 'It\'s rarely about cost — it\'s not knowing where to start, or getting burned by a builder who disappeared after launch. That\'s the gap we exist to close.',
  },
  {
    slug: 'built-around-you',
    title: 'Every business gets its own plan',
    body: 'No two businesses sell the same way, so no two sites should look or work the same. We build around what makes your business different, not a one-size template.',
  },
  {
    slug: 'clear-from-the-start',
    title: 'Clear from the start',
    body: 'Flat pricing, a defined scope, and a plan you actually understand before we start — not a vague estimate that grows once you\'re locked in.',
  },
];
