'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, FileText, FolderGit2 } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { CursorGlow } from '@/components/cursor-glow';
import { ParticleField } from '@/components/particle-field';
import { DockNav } from '@/components/dock-nav';
import { ScrollToTop } from '@/components/scroll-to-top';
import { KeyboardShortcutsHint } from '@/components/keyboard-shortcuts-hint';

const LINKS = {
  github: 'https://github.com/Tushar282002',
  linkedin: 'https://www.linkedin.com/in/tushar-gangurde-/',
  resume: '/resume.pdf',
  projects: '/projects',
};

export function GlobalUX({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      )
        return;
      const key = e.key.toLowerCase();
      if (key === 'g') window.open(LINKS.github, '_blank');
      else if (key === 'l') window.open(LINKS.linkedin, '_blank');
      else if (key === 'r') window.open(LINKS.resume, '_blank');
      else if (key === 'p') window.location.href = LINKS.projects;
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <CursorGlow />
      <ParticleField />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-primary via-chart-2 to-chart-3"
        style={{ scaleX }}
      />
      <div className="fixed left-1/2 top-4 z-[80] -translate-x-1/2">
        <ThemeSwitcher />
      </div>
      {mounted && <DockNav />}
      <KeyboardShortcutsHint />
      <ScrollToTop />
      <main className="relative z-10">{children}</main>
    </>
  );
}

export { LINKS };
