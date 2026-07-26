'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { CODING_STATS, GITHUB_USERNAME } from '@/lib/data';
import { AnimatedNumber } from '@/components/animated-number';

// Deterministic pseudo-random contribution levels (stable across renders)
function genLevels(): number[] {
  const levels: number[] = [];
  let seed = 42;
  for (let i = 0; i < 364; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const r = seed / 233280;
    if (r < 0.5) levels.push(0);
    else if (r < 0.72) levels.push(1);
    else if (r < 0.86) levels.push(2);
    else if (r < 0.95) levels.push(3);
    else levels.push(4);
  }
  return levels;
}

const LEVEL_COLORS = [
  'bg-muted',
  'bg-primary/30',
  'bg-primary/50',
  'bg-primary/70',
  'bg-primary',
];

export function CodingJourney() {
  const [levels, setLevels] = useState<number[]>([]);
  const [recent, setRecent] = useState<
    { type: string; repo: string; date: string }[]
  >([]);

  useEffect(() => {
    setLevels(genLevels());
    setRecent([
      { type: 'push', repo: 'portfolio', date: '2h ago' },
      { type: 'star', repo: 'three.js', date: '1d ago' },
      { type: 'commit', repo: 'flight-navigation', date: '2d ago' },
      { type: 'pr', repo: 'engagecart', date: '3d ago' },
      { type: 'push', repo: 'weather-monitoring', date: '5d ago' },
    ]);
  }, []);

  return (
    <SectionShell id="journey">
      <SectionHeading
        eyebrow="Coding Journey"
        title="Consistency, measured."
        description="Where I sharpen my craft — competitive programming and open source."
      />

      {/* Platform stats */}
      <div className="grid gap-6 md:grid-cols-2">
        {CODING_STATS.map((platform, pi) => (
          <motion.div
            key={platform.platform}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: pi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass card-hover relative overflow-hidden rounded-3xl p-8"
          >
            <div
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-15 blur-2xl"
              style={{ background: `hsl(${platform.accent})` }}
            />
            <h3 className="font-display text-lg font-semibold">{platform.platform}</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {platform.metrics.map((m) => {
                const numeric = parseInt(String(m.value).replace(/\D/g, ''));
                const isNumeric = !isNaN(numeric) && numeric > 0;
                const suffix = isNumeric ? String(m.value).replace(/\d/g, '') : '';
                return (
                  <div key={m.label}>
                    <div className="font-display text-2xl font-bold">
                      {isNumeric ? (
                        <>
                          <AnimatedNumber value={numeric} />
                          {suffix}
                        </>
                      ) : (
                        String(m.value)
                      )}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub contribution graph */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass mt-6 rounded-3xl p-8"
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">GitHub Activity</h3>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary hover:underline"
          >
            @{GITHUB_USERNAME}
          </a>
        </div>
        <div className="mask-fade-x overflow-x-auto scrollbar-none">
          <div className="flex gap-[3px]">
            {levels.map((lvl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: (i % 52) * 0.01 }}
                className={`h-2.5 w-2.5 rounded-[2px] ${LEVEL_COLORS[lvl]}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
          Less
          {LEVEL_COLORS.map((c, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
          ))}
          More
        </div>
      </motion.div>

      {/* Recent activity */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass mt-6 rounded-3xl p-8"
      >
        <h3 className="mb-5 font-display text-lg font-semibold">Recent Activity</h3>
        <div className="space-y-3">
          {recent.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {a.type}
                </span>
                <span className="font-mono text-sm">{a.repo}</span>
              </div>
              <span className="text-xs text-muted-foreground">{a.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
