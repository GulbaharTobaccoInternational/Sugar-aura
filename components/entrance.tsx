'use client';

import type { ReactNode } from 'react';
import { motion, useAnimationControls, useReducedMotion } from 'motion/react';

const ease = [.22, 1, .36, 1] as const;

export function HeroEntrance({ children, className }: { children: ReactNode; className: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      animate={reduce ? undefined : { opacity: [.7, 1], y: [12, 0] }}
      transition={{ duration: .45, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  const controls = useAnimationControls();

  return (
    <motion.div
      initial={false}
      animate={controls}
      viewport={{ once: true, margin: '0px 0px 120px 0px' }}
      onViewportEnter={entry => {
        // Keep already visible content readable if hydration follows a fast scroll.
        if (reduce || !entry || entry.boundingClientRect.top < window.innerHeight * .85) return;
        void controls.start({ opacity: [0, 1], y: [18, 0], transition: { duration: .48, delay, ease } });
      }}
    >
      {children}
    </motion.div>
  );
}
