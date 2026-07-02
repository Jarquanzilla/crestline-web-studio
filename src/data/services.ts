export interface ServiceCategory {
  id: string;
  tag: string;
  title: string;
  body: string;
  accent: string;
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'strategy',
    tag: '01',
    title: 'Custom Strategy, Not a Template',
    body: 'We start with how your business actually makes sales — not a drag-and-drop theme with your logo dropped on top. Every site and system is built around your customers.',
    accent: '#94a05c',
  },
  {
    id: 'automation',
    tag: '02',
    title: 'Automated Where It Counts',
    body: 'Booking forms, lead follow-ups, review requests, email capture — the repetitive stuff runs itself, so leads don\'t slip through the cracks.',
    accent: '#c3c5c9',
  },
  {
    id: 'traffic',
    tag: '03',
    title: 'Built to Convert Traffic',
    body: 'Fast, mobile-first, SEO-sound from day one. More of the traffic you already have turns into calls, bookings, and sales.',
    accent: '#c9a24a',
  },
  {
    id: 'maintenance',
    tag: '04',
    title: 'Zero Maintenance',
    body: 'Security patches, software updates, and small edits are on us. Your only job is running your business, not your website.',
    accent: '#b06a4a',
  },
];
