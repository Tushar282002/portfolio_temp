'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { EXPERIENCES } from '@/lib/data';

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built."
        description="A timeline of roles where I shipped real software for real users."
      />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2" />
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-primary" />
          {exp.current && (
            <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-primary/60" />
          )}
        </div>
      </div>

      <div
        className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? '' : 'md:ml-[calc(50%+2rem)]'
        }`}
      >
        <motion.div
          layout
          className="glass card-hover overflow-hidden rounded-2xl"
        >
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                {exp.current && (
                  <span className="rounded-full bg-chart-2/15 px-2 py-0.5 text-xs font-medium text-chart-2">
                    Current
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {exp.company}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{exp.period}</div>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 px-6 pb-6">
              {exp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
