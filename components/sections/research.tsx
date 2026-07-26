'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';

export function Research() {
  return (
    <SectionShell id="research">
      <SectionHeading
        eyebrow="Research"
        title="Published work."
        description="Peer-reviewed research presented at an IEEE conference."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="glass card-hover group relative overflow-hidden rounded-3xl p-8 md:p-10"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 opacity-50 blur-3xl transition-opacity group-hover:opacity-80" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                IEEE Publication
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              College Management System Using Blockchain
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground/80">Conference:</strong> ICIIP 2023
              </span>
              <span>
                <strong className="text-foreground/80">DOI:</strong>{' '}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  10.1109/ICIIP61524.2023.10537672
                </code>
              </span>
            </div>
          </div>
          <a
            href="https://ieeexplore.ieee.org/document/10537672"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 hover:glow-primary active:scale-95"
          >
            <FileText className="h-4 w-4" />
            Read Paper
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>
      </motion.div>
    </SectionShell>
  );
}
