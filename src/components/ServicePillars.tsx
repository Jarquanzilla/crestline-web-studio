import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SERVICES, ServiceCategory } from '../data/services';

const Card: React.FC<{ item: ServiceCategory; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      className="service-card group relative p-8 border border-line bg-charcoal overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 20%, ${item.accent}22, transparent 60%)` }}
      />
      <div style={{ transform: 'translateZ(40px)' }} className="relative">
        <span className="text-mono text-xs text-white/30">{item.tag}</span>
        <h3
          className="text-huge text-2xl md:text-3xl mt-3 mb-3 transition-colors"
          style={{ color: `${item.accent}` }}
        >
          {item.title}
        </h3>
        <p className="text-white/50 leading-relaxed max-w-sm">{item.body}</p>
      </div>
    </motion.div>
  );
};

export const ServicePillars: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line" style={{ perspective: 1200 }}>
      <div className="mb-16 max-w-2xl">
        <span className="text-label text-moss-300/50 text-mono">The Offer</span>
        <h2 className="text-huge text-4xl md:text-6xl mt-3">Build it. Automate it. Grow it.</h2>
        <p className="text-white/50 mt-4">
          Every business gets its own playbook — here's what's included no matter which one you need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((item, i) => (
          <Card key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};
