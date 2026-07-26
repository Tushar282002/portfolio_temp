'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass-strong fixed bottom-6 right-6 z-[85] flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
