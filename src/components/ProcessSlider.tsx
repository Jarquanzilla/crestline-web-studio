import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { n: '01', title: 'Intake', body: 'A short call or form — what your business does, who it serves, and where customers currently fall through the cracks.' },
  { n: '02', title: 'Strategy', body: 'We map the specific mix of site, automation, and traffic tactics that fits your business — not a generic package.' },
  { n: '03', title: 'Build', body: 'Hand-coded, fast-loading, mobile-first — with your automations wired in from day one.' },
  { n: '04', title: 'Launch', body: 'Live on your domain, connected, and yours — sign-off before anything ships.' },
];

export const ProcessSlider: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line">
      <h2 className="text-huge text-4xl md:text-6xl mb-16">Process</h2>

      <div className="relative max-w-2xl">
        <div className="absolute left-[1.6rem] top-2 bottom-2 w-px bg-line-strong" />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex gap-8 pl-0"
            >
              <div className="relative z-10 shrink-0 w-[3.2rem] h-[3.2rem] rounded-full border border-line-strong bg-charcoal flex items-center justify-center text-mono text-sm text-white/40 group-hover:text-moss-300 group-hover:border-moss-400/50 group-hover:scale-110 transition-all">
                {step.n}
              </div>
              <div className="pt-1">
                <h3 className="text-huge text-2xl md:text-3xl mb-2 group-hover:text-moss-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-md">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
