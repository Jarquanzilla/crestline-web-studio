import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PHRASES = ['that don\'t have one.', 'that look ten years old.', 'that lose to AI.'];

export const TypingHero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const speed = deleting ? 35 : 55;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 grid-lines overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl"
      >
        <p className="text-label text-white/40 mb-6">Crestline Web Studio — Tulsa, OK</p>
        <h1 className="text-huge text-6xl md:text-[7.5rem] tracking-tight">
          Websites for
          <br />
          businesses
          <br />
          <span className="text-white/50">{text}</span>
          <span className="caret">|</span>
        </h1>
        <p className="text-editorial text-2xl md:text-3xl text-white/60 mt-8 max-w-xl">
          Built fast, priced clearly, live in days — not months.
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-10">
          <Link
            to="/work"
            className="text-label border border-white/30 px-6 py-3 hover:bg-white hover:text-ink transition-colors"
          >
            See the work
          </Link>
          <Link to="/contact" className="text-label text-white/60 hover:text-white transition-colors">
            Book a call →
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 md:left-10 text-label text-white/30"
      >
        Scroll
      </motion.div>
    </section>
  );
};
