'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard } from 'lucide-react';

const SHORTCUTS = [
  { key: 'G', label: 'GitHub' },
  { key: 'L', label: 'LinkedIn' },
  { key: 'R', label: 'Resume' },
  { key: 'P', label: 'Projects' },
];

export function KeyboardShortcutsHint() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === '?') setOpen((v) => !v);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass-strong fixed bottom-6 left-6 z-[85] hidden h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95 md:flex"
        aria-label="Keyboard shortcuts"
      >
        <Keyboard className="h-4 w-4 text-muted-foreground" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="glass-strong w-full max-w-md rounded-3xl p-8 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-lg font-semibold">Keyboard Shortcuts</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Press a key anywhere to jump.
              </p>
              <div className="mt-6 space-y-3">
                {SHORTCUTS.map((s) => (
                  <div
                    key={s.key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                    <kbd className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-border bg-muted px-2 font-mono text-sm font-medium">
                      {s.key}
                    </kbd>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Press <kbd className="font-mono">?</kbd> to toggle this dialog.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
