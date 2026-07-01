import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ScreenPanelProps {
  className?: string;
  delay?: number;
  tiltX?: number;
  tiltY?: number;
  parallaxX?: MotionValue<number>;
}

// Decorative tilted "screen" — a stand-in for the 3D floating-monitor look
// without pulling in a full 3D engine for a handful of ambient panels.
export const ScreenPanel: React.FC<ScreenPanelProps> = ({
  className = '',
  delay = 0,
  tiltX = 6,
  tiltY = -12,
  parallaxX,
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={parallaxX ? { x: parallaxX } : undefined}
      initial={{ opacity: 0, y: 60, scale: 0.82 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="rounded-md glow-border bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent overflow-hidden w-full h-full"
        style={{ transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 }}
      >
        <div className="scanlines scanlines-animated absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
        <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-cyan-300 pulse-glow" />
      </motion.div>
    </motion.div>
  );
};
