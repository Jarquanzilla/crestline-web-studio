import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { n: '01', title: 'Intake', body: 'A short call or form — what your business does, who it serves, what the old site got wrong.' },
  { n: '02', title: 'Design', body: 'A first draft inside days, not weeks. Two rounds of revisions included.' },
  { n: '03', title: 'Build', body: 'Hand-coded, fast-loading, mobile-first. No bloated page builders.' },
  { n: '04', title: 'Launch', body: 'Live on your domain, connected, and yours — sign-off before anything ships.' },
];

export const ProcessSlider: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="text-huge text-4xl md:text-6xl">Process</h2>
        <p className="text-label text-white/40 hidden md:block">Drag to explore →</p>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:-mx-10 md:px-10">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="min-w-[280px] md:min-w-[340px] shrink-0 border border-line p-8 bg-charcoal"
          >
            <span className="text-label text-white/30">{step.n}</span>
            <h3 className="text-huge text-3xl mt-4 mb-3">{step.title}</h3>
            <p className="text-white/50 leading-relaxed">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
