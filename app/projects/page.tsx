'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2 } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '@/lib/projects';
import { Footer } from '@/components/sections/footer';

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = active === 'All' || p.categories.includes(active);
      return matchesQuery && matchesCategory;
    });
  }, [query, active]);

  return (
    <div className="relative z-10 min-h-screen pt-24">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Projects
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything I&apos;ve built — from algorithms to full-stack apps. Search,
            filter, and find what matters to you.
          </p>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-col gap-4"
        >
          <div className="glass relative flex items-center rounded-full">
            <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, or keywords..."
              className="w-full bg-transparent py-3 pl-11 pr-4 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['All', ...PROJECT_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === cat
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-24 text-center"
          >
            <FolderGit2 className="h-12 w-12 text-muted-foreground/50" />
            <p className="text-muted-foreground">
              No projects match your search. Try a different filter.
            </p>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
