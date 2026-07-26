'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/projects';

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work."
        description="Three projects that show how I think, build, and ship."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary transition-all hover:scale-105 hover:glow-primary active:scale-95"
        >
          View All Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </SectionShell>
  );
}
