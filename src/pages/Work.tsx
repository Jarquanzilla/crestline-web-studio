import React from 'react';
import { motion } from 'framer-motion';
import { WORK } from '../data/work';

export const Work: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <h1 className="text-huge text-5xl md:text-7xl mb-4">Selected Work</h1>
      <p className="text-white/40 max-w-lg mb-16">
        Concept builds across the trades we serve. Each one is a fictional business — labeled clearly, never a real client without permission.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {WORK.map((item, i) => (
          <motion.a
            key={item.slug}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="work-card block group"
          >
            <div
              className="aspect-[4/3] flex flex-col justify-end p-8"
              style={{ background: `linear-gradient(135deg, ${item.accent}22, var(--charcoal))` }}
            >
              <span className="text-label text-white/40 mb-2">{item.tag} — {item.trade}</span>
              <h2 className="text-huge text-3xl mb-3">{item.name}</h2>
              <p className="text-white/50 text-sm max-w-sm">{item.blurb}</p>
              <span className="text-label text-white/30 mt-4 group-hover:text-white/60">Visit site →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Work;
