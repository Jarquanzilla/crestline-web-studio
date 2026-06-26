import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WORK } from '../data/work';

export const SelectedWork: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="text-huge text-4xl md:text-6xl">Selected Work</h2>
        <Link to="/work" className="text-label text-white/40 hover:text-white transition-colors hidden md:block">
          View all →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {WORK.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`work-card group ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
          >
            <div
              className="aspect-[16/9] flex items-end p-8"
              style={{ background: `linear-gradient(135deg, ${item.accent}22, var(--charcoal))` }}
            >
              <div>
                <span className="text-label text-white/40">{item.tag} — {item.trade}</span>
                <h3 className="text-huge text-3xl md:text-4xl mt-2">{item.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link to="/work" className="text-label text-white/40 hover:text-white transition-colors mt-10 inline-block md:hidden">
        View all →
      </Link>
    </section>
  );
};
