'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { ACHIEVEMENTS } from '@/lib/data';

export function Achievements() {
  return (
    <SectionShell id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition."
        description="Milestones that prove the work."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass card-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                style={{ background: `hsl(${a.accent})` }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    background: `hsl(${a.accent} / 0.12)`,
                    color: `hsl(${a.accent})`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-primary/60" />
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      Achievement
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.subtitle}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
