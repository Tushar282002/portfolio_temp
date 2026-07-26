'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const paginate = (newIdx: number) => {
    setDir(newIdx > imgIndex ? 1 : -1);
    setImgIndex((newIdx + project.images.length) % project.images.length);
  };

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="glass card-hover group relative flex flex-col overflow-hidden rounded-3xl"
    >
      {/* Image carousel */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={imgIndex}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-2/3 -translate-x-1/2 rounded-full opacity-40 blur-2xl"
          style={{ background: `hsl(${project.accent})` }}
        />

        {/* Carousel controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={() => paginate(imgIndex - 1)}
              className="glass absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => paginate(imgIndex + 1)}
              className="glass absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === imgIndex ? 'w-6 bg-primary' : 'w-1.5 bg-foreground/30'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{project.tagline}</p>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground/70">Problem</span>
            <span className="text-muted-foreground">{project.problem}</span>
          </div>
          <div className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground/70">Approach</span>
            <span className="text-muted-foreground">{project.approach}</span>
          </div>
          <div className="flex gap-2">
            <span className="shrink-0 font-medium text-foreground/70">Impact</span>
            <span className="text-muted-foreground">{project.impact}</span>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
