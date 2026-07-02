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

      <div className="flex flex-col gap-6">
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
            className="work-card block group w-full"
          >
            <div
              className="relative aspect-[21/9] md:aspect-[21/7] flex flex-col justify-end p-8 md:p-12 bg-cover bg-top"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="relative z-10">
                <span className="text-label text-white/50 mb-2 block">{item.tag} — {item.trade}</span>
                <h2 className="text-huge text-3xl md:text-5xl mb-3">{item.name}</h2>
                <p className="text-white/60 text-sm max-w-md">{item.blurb}</p>
                <span className="text-label text-white/40 mt-4 inline-block group-hover:text-moss-300 transition-colors">Visit site →</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Work;
