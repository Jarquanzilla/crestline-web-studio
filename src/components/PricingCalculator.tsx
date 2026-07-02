import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type TierKey = 'essential' | 'professional' | 'premium';

// PLACEHOLDER PRICING — replace with your real Step 11 tier numbers before launch.
const TIERS: Record<TierKey, { label: string; base: number; monthly: number; includes: string[] }> = {
  essential: {
    label: 'Essential',
    base: 750,
    monthly: 0,
    includes: ['Up to 5 pages', '2 rounds of revisions', 'Mobile-first build', 'Launch on your domain'],
  },
  professional: {
    label: 'Professional',
    base: 1200,
    monthly: 50,
    includes: ['Everything in Essential', 'Monthly maintenance + edits', 'Basic SEO setup', 'Priority support'],
  },
  premium: {
    label: 'Premium',
    base: 2200,
    monthly: 100,
    includes: ['Everything in Professional', 'Booking/quote integrations', 'Copywriting pass', 'Analytics dashboard'],
  },
};

const EXTRAS = [
  { key: 'rush', label: 'Rush delivery (under 1 week)', cost: 300 },
  { key: 'copy', label: 'Full copywriting', cost: 250 },
  { key: 'chat', label: 'AI chat / FAQ widget', cost: 200 },
];

export const PricingCalculator: React.FC = () => {
  const [tier, setTier] = useState<TierKey>('professional');
  const [extras, setExtras] = useState<string[]>([]);

  const toggleExtra = (key: string) => {
    setExtras((prev) => (prev.includes(key) ? prev.filter((e) => e !== key) : [...prev, key]));
  };

  const total = useMemo(() => {
    const extrasCost = EXTRAS.filter((e) => extras.includes(e.key)).reduce((sum, e) => sum + e.cost, 0);
    return TIERS[tier].base + extrasCost;
  }, [tier, extras]);

  return (
    <div className="border border-line p-8 md:p-12 bg-charcoal">
      <p className="text-label text-white/40 mb-8">Estimate your project</p>

      <div className="grid grid-cols-3 gap-3 mb-10">
        {(Object.keys(TIERS) as TierKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setTier(key)}
            className={`text-label px-4 py-4 border transition-all hover:scale-[1.03] ${
              tier === key
                ? 'border-white bg-white text-ink'
                : 'border-line text-white/60 hover:border-moss-400/50 hover:text-moss-200'
            }`}
          >
            {TIERS[key].label}
          </button>
        ))}
      </div>

      <ul className="space-y-2 mb-10">
        {TIERS[tier].includes.map((line) => (
          <li key={line} className="text-white/60 text-sm flex gap-3">
            <span className="text-white/30">—</span> {line}
          </li>
        ))}
      </ul>

      <div className="mb-10">
        <p className="text-label text-white/40 mb-4">Add-ons</p>
        <div className="flex flex-wrap gap-3">
          {EXTRAS.map((extra) => (
            <button
              key={extra.key}
              onClick={() => toggleExtra(extra.key)}
              className={`text-sm px-4 py-2 border transition-all hover:scale-[1.03] ${
                extras.includes(extra.key)
                  ? 'border-white bg-white text-ink'
                  : 'border-line text-white/50 hover:border-moss-400/50 hover:text-moss-200'
              }`}
            >
              {extra.label} (+${extra.cost})
            </button>
          ))}
        </div>
      </div>

      <div className="hairline mb-8" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-label text-white/40 mb-1">Estimated total</p>
          <motion.p
            key={total}
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-huge text-5xl"
          >
            ${total.toLocaleString()}
            {TIERS[tier].monthly > 0 && (
              <span className="text-white/40 text-xl"> + ${TIERS[tier].monthly}/mo</span>
            )}
          </motion.p>
        </div>
        <p className="text-white/30 text-xs max-w-[160px] text-right">Final quote confirmed on your intake call.</p>
      </div>
    </div>
  );
};
