import React, { useEffect, useState } from 'react';

const BITS = '01';

function scrambleUpTo(text: string, progress: number): string {
  return text
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' ';
      const charThreshold = i / text.length;
      if (progress > charThreshold + 0.12) return char;
      return BITS[Math.floor(Math.random() * BITS.length)];
    })
    .join('');
}

interface DecodeTextProps {
  text: string;
  className?: string;
  delayMs?: number;
  frameMs?: number;
  frames?: number;
  onComplete?: () => void;
}

export const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  className,
  delayMs = 0,
  frameMs = 35,
  frames = 18,
  onComplete,
}) => {
  const [display, setDisplay] = useState(() => scrambleUpTo(text, 0));

  useEffect(() => {
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        frame += 1;
        const progress = frame / frames;
        setDisplay(progress >= 1 ? text : scrambleUpTo(text, progress));
        if (progress >= 1) {
          if (interval) clearInterval(interval);
          onComplete?.();
        }
      }, frameMs);
    }, delayMs);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delayMs, frameMs, frames, onComplete]);

  return <span className={className}>{display}</span>;
};
