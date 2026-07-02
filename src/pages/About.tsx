import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_POINTS } from '../data/about';
import { SITE } from '../siteConfig';

export const About: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <h1 className="text-huge text-5xl md:text-7xl mb-4">About {SITE.name}</h1>
      <p className="text-white/40 max-w-lg mb-16">
        A small studio that builds the site and the systems behind it — so the work of running your
        business gets easier, not harder.
      </p>

      <div className="divide-y divide-line max-w-2xl">
        {ABOUT_POINTS.map((point, i) => (
          <motion.div
            key={point.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="py-10"
          >
            <h2 className="text-huge text-2xl md:text-3xl mb-3">{point.title}</h2>
            <p className="text-white/50 max-w-xl leading-relaxed">{point.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
