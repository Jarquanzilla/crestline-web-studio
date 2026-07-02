import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DecodeText } from './DecodeText';
import { RisingLine } from './RisingLine';
import { ScreenPanel } from './ScreenPanel';
import { ParticleField } from './ParticleField';
import { SITE } from '../siteConfig';

export const TypingHero: React.FC = () => {
  const [decoded, setDecoded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Parallax multipliers scale with each panel's apparent distance —
  // larger/closer panels shift more, the deep backdrop word barely moves.
  const bgTextX = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const bgTextY = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const panel1X = useTransform(mouseX, [-0.5, 0.5], [26, -26]);
  const panel2X = useTransform(mouseX, [-0.5, 0.5], [18, -18]);
  const panel3X = useTransform(mouseX, [-0.5, 0.5], [12, -12]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col px-6 md:px-10 pt-36 md:pt-44 pb-24 grid-lines overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />
      <ParticleField count={22} />

      {/* Deep background layer — faint oversized wordmark for depth-of-field */}
      <motion.div
        style={{ x: bgTextX, y: bgTextY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-huge text-white/[0.035] text-[13rem] md:text-[20rem] whitespace-nowrap blur-[1px]">
          {SITE.shortName}
        </span>
      </motion.div>

      {/* Ambient floating screens — desktop only, purely atmospheric */}
      <ScreenPanel className="hidden lg:block w-64 h-40 right-12 top-40" delay={0.2} parallaxX={panel1X} />
      <ScreenPanel className="hidden lg:block w-48 h-32 right-40 top-72" delay={0.5} tiltX={-4} tiltY={10} parallaxX={panel2X} />
      <ScreenPanel className="hidden xl:block w-40 h-28 right-[28rem] top-52" delay={0.8} tiltX={8} tiltY={-18} parallaxX={panel3X} />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl"
      >
        <p className="text-label text-moss-300/50 mb-6 text-mono">
          <DecodeText text={SITE.shortName} />
        </p>
        <h1 className="text-huge text-6xl md:text-[7.5rem] tracking-tight text-white glow-white">
          <DecodeText text="We build it." frames={14} />
          <br />
          <DecodeText text="We automate it." delayMs={300} frames={14} />
          <br />
          <span className={`block min-h-[1.15em] glow-moss ${decoded ? 'shimmer-sweep' : 'text-moss-300/80'}`}>
            <DecodeText
              text="You grow."
              delayMs={650}
              frames={26}
              onComplete={() => setDecoded(true)}
            />
          </span>
        </h1>
        <p className="text-white/50 mt-8 max-w-xl text-mono text-sm">
          Custom-coded sites paired with a strategy built for your business — booking, follow-ups, and traffic systems automated so more visitors turn into customers.
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-10">
          <Link
            to="/work"
            className="text-label border border-moss-400/40 px-6 py-3 text-moss-200 hover:bg-moss-400/10 hover:border-moss-300 hover:scale-105 transition-all"
          >
            See the work
          </Link>
          <Link
            to="/contact"
            className="text-label text-white/60 hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Book a call →
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-4 max-w-xs">
          <RisingLine className="w-40 h-16" delay={1.4} />
          <p className="text-mono text-[0.65rem] text-white/30 leading-tight">
            UPTIME<br />
            <span className="text-moss-300/60">always on</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 md:left-10 text-label text-white/30 text-mono z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
};
