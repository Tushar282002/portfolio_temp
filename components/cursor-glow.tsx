'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] h-[400px] w-[400px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
        x: pos.x - 200,
        y: pos.y - 200,
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30, opacity: { duration: 0.3 } }}
    />
  );
}
