'use client';

import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedNumber({
  value,
  duration = 1.8,
  display,
}: {
  value: number;
  duration?: number;
  display?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [text, setText] = useState('0');

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = rounded.on('change', (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, duration, count, rounded]);

  if (display) return <>{display}</>;
  return <>{text}</>;
}
