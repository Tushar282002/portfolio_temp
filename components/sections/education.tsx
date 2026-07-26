'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';

export function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading
        eyebrow="Education"
        title="Foundation."
        description="Where the fundamentals were built."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
        <div className="relative ml-10">
          <div className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
          <motion.div
            whileHover={{ y: -4 }}
            className="glass card-hover rounded-3xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold">
                  Bachelor of Engineering
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Computer Science · Chandigarh University
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  2021 – 2025
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
