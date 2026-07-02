export interface WorkItem {
  slug: string;
  name: string;
  trade: string;
  blurb: string;
  tag: 'Concept Project';
  accent: string;
  url: string;
}

export const WORK: WorkItem[] = [
  {
    slug: 'armsworthy-tulsa-fencing',
    name: 'Armsworthy Tulsa Fencing',
    trade: 'Fencing',
    blurb: 'Full fence-catalog site with installation and repair service pages, built for fast local-search visibility.',
    tag: 'Concept Project',
    accent: '#94a05c',
    url: 'https://armsworthytulsafencing.pages.dev',
  },
  {
    slug: 'd-fence-tulsa',
    name: 'D-Fence of Tulsa',
    trade: 'Fencing',
    blurb: 'Competing fence-company build in the same market — same trade, different positioning and layout.',
    tag: 'Concept Project',
    accent: '#c3c5c9',
    url: 'https://d-fence.pages.dev',
  },
  {
    slug: 'nova-cinematic',
    name: 'Nova',
    trade: 'Photography',
    blurb: 'A Portrait in Light & Shadow — mood-driven, image-forward gallery site for a portrait photographer.',
    tag: 'Concept Project',
    accent: '#c9a24a',
    url: 'https://nova-cinematic-site.vercel.app',
  },
];
