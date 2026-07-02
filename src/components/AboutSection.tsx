import React from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-10 border-t border-line overflow-hidden">
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[560px] md:w-[820px] opacity-[0.07] pointer-events-none select-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl"
      >
        <span className="text-label text-moss-300/50 text-mono">About {SITE.name}</span>
        <h2 className="text-huge text-4xl md:text-6xl mt-3 mb-6">A small studio, built around automation.</h2>
        <p className="text-white/50 leading-relaxed">
          Most local businesses don't need another templated website — they need a system. We pair every
          build with the specific mix of strategy and automation that fits how that business actually makes
          money, then stay on to keep it running.
        </p>
      </motion.div>
    </section>
  );
};
