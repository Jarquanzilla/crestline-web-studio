export interface ServiceCategory {
  id: string;
  tag: string;
  title: string;
  body: string;
  accent: string;
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'custom-build',
    tag: '01',
    title: 'Custom-Built, Not Templated',
    body: 'Every site is hand-coded from scratch to fit your business — not a drag-and-drop theme with your logo dropped on top.',
    accent: '#5eead4',
  },
  {
    id: 'domain',
    tag: '02',
    title: 'Domain, Handled',
    body: 'We register or transfer your domain and keep it renewed, secured, and pointed where it belongs. You never see a registrar dashboard.',
    accent: '#38bdf8',
  },
  {
    id: 'hosting',
    tag: '03',
    title: 'Hosting, Handled',
    body: 'Fast servers, SSL, nightly backups, uptime monitoring. Your site just stays online — nobody has to log in and check.',
    accent: '#a78bfa',
  },
  {
    id: 'maintenance',
    tag: '04',
    title: 'Zero Maintenance',
    body: 'Security patches, software updates, and small edits are on us. Your only job is running your business, not your website.',
    accent: '#f472b6',
  },
];
