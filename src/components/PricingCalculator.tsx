import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const BUILD_PRICE = 750;
const DOMAIN_PRICE = 15;

const INCLUDES = [
  'Up to 5 pages (Home, About, Services, Contact, Portfolio)',
  '2 rounds of revisions on the initial design',
  'Basic on-page SEO (titles, meta descriptions, headers)',
  'Contact form wired to your email',
  'Hosting on Cloudflare Pages',
];

type SupportKey = 'none' | 'standard' | 'premium';

const SUPPORT: Record<SupportKey, { label: string; monthly: number; blurb: string }> = {
  none: { label: 'None', monthly: 0, blurb: 'Pay for updates as you need them.' },
  standard: { label: 'Standard', monthly: 50, blurb: '3 hours of design/dev work per month.' },
  premium: { label: 'Premium', monthly: 75, blurb: '6 hours of design/dev work per month.' },
};

export const PricingCalculator: React.FC = () => {
  const [wantsDomain, setWantsDomain] = useState(true);
  const [support, setSupport] = useState<SupportKey>('none');

  const total = useMemo(() => BUILD_PRICE + (wantsDomain ? DOMAIN_PRICE : 0), [wantsDomain]);

  return (
    <div className="border border-line p-8 md:p-12 bg-charcoal">
      <p className="text-label text-white/40 mb-2">Estimate your project</p>
      <p className="text-white/30 text-xs mb-8">Website build is a flat rate — no tiers to guess between.</p>

      <ul className="space-y-2 mb-10">
        {INCLUDES.map((line) => (
          <li key={line} className="text-white/60 text-sm flex gap-3">
            <span className="text-white/30">—</span> {line}
          </li>
        ))}
      </ul>

      <div className="mb-10">
        <p className="text-label text-white/40 mb-4">Domain</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setWantsDomain(true)}
            className={`text-sm px-4 py-3 border text-left transition-all hover:scale-[1.03] ${
              wantsDomain ? 'border-white bg-white text-ink' : 'border-line text-white/50 hover:border-moss-400/50 hover:text-moss-200'
            }`}
          >
            Register a custom domain for me (+${DOMAIN_PRICE}/yr)
          </button>
          <button
            onClick={() => setWantsDomain(false)}
            className={`text-sm px-4 py-3 border text-left transition-all hover:scale-[1.03] ${
              !wantsDomain ? 'border-white bg-white text-ink' : 'border-line text-white/50 hover:border-moss-400/50 hover:text-moss-200'
            }`}
          >
            I'll use a free pages.dev subdomain or my own domain
          </button>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-label text-white/40 mb-4">Ongoing support (optional)</p>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(SUPPORT) as SupportKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSupport(key)}
              className={`text-label px-3 py-4 border transition-all hover:scale-[1.03] ${
                support === key ? 'border-white bg-white text-ink' : 'border-line text-white/60 hover:border-moss-400/50 hover:text-moss-200'
              }`}
            >
              {SUPPORT[key].label}
            </button>
          ))}
        </div>
        <p className="text-white/30 text-xs mt-3">{SUPPORT[support].blurb}</p>
      </div>

      <div className="hairline mb-8" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-label text-white/40 mb-1">Estimated total</p>
          <motion.p
            key={`${total}-${support}`}
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-huge text-5xl"
          >
            ${total.toLocaleString()}
            {SUPPORT[support].monthly > 0 && (
              <span className="text-white/40 text-xl"> + ${SUPPORT[support].monthly}/mo</span>
            )}
          </motion.p>
        </div>
        <p className="text-white/30 text-xs max-w-[160px] text-right">Payment due in full before work begins.</p>
      </div>
    </div>
  );
};
