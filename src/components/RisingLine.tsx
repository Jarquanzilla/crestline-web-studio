import React from 'react';
import { motion } from 'framer-motion';

interface RisingLineProps {
  className?: string;
  delay?: number;
}

// Abstract ascending data-line. Purely decorative — implies momentum, asserts nothing.
export const RisingLine: React.FC<RisingLineProps> = ({ className = '', delay = 0 }) => {
  return (
    <svg viewBox="0 0 300 120" className={className} fill="none">
      <motion.path
        d="M0 100 L36 88 L72 92 L108 58 L144 66 L180 30 L216 40 L252 14 L300 6"
        stroke="#94a05c"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay }}
        style={{ filter: 'drop-shadow(0 0 8px rgba(148,160,92,0.7))' }}
      />
      <motion.circle
        cx={300}
        cy={6}
        r={4}
        fill="#94a05c"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 2 }}
        style={{ filter: 'drop-shadow(0 0 10px rgba(148,160,92,0.9))' }}
      />
    </svg>
  );
};
