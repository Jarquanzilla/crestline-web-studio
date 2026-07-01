import React from 'react';
import { motion } from 'framer-motion';
import { JOURNAL } from '../data/journal';

export const Journal: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <h1 className="text-huge text-5xl md:text-7xl mb-16">Journal</h1>

      <div className="divide-y divide-line">
        {JOURNAL.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="py-10 grid md:grid-cols-[120px_1fr] gap-6 group cursor-pointer transition-colors hover:bg-white/[0.02] -mx-6 px-6 md:-mx-10 md:px-10"
          >
            <p className="text-label text-white/30 group-hover:text-cyan-300/50 transition-colors">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
            <div>
              <h2 className="text-huge text-2xl md:text-3xl group-hover:text-cyan-200 group-hover:translate-x-1 transition-all inline-block">
                {post.title}
              </h2>
              <p className="text-white/40 mt-2 max-w-xl">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Journal;
