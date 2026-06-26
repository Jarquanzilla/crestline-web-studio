export interface WorkItem {
  slug: string;
  name: string;
  trade: string;
  blurb: string;
  tag: 'Concept Project';
  accent: string;
}

// PLACEHOLDER: swap these for real concept builds as Phase 1 Step 4 sites go live.
export const WORK: WorkItem[] = [
  {
    slug: 'ridgeline-roofing',
    name: 'Ridgeline Roofing',
    trade: 'Roofing',
    blurb: 'Storm-response landing page with instant quote request and before/after gallery.',
    tag: 'Concept Project',
    accent: '#c4622d',
  },
  {
    slug: 'greenscape-lawn',
    name: 'Greenscape Lawn Co.',
    trade: 'Landscaping',
    blurb: 'Seasonal service menu, recurring-plan signup, and a map of service areas.',
    tag: 'Concept Project',
    accent: '#4a7a4e',
  },
  {
    slug: 'northside-hvac',
    name: 'Northside HVAC',
    trade: 'HVAC',
    blurb: 'Emergency-call-first layout with maintenance plan tiers and financing info.',
    tag: 'Concept Project',
    accent: '#2d6fc4',
  },
  {
    slug: 'oakwood-table',
    name: 'Oakwood Table',
    trade: 'Restaurant',
    blurb: 'Menu-forward single page with reservation widget and event booking.',
    tag: 'Concept Project',
    accent: '#a8862d',
  },
];
