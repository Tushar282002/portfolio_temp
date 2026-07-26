'use client';

import { motion } from 'framer-motion';
import { User, Sparkles, Target } from 'lucide-react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';

const CARDS = [
  {
    icon: User,
    title: 'Who I Am',
    body: 'Associate Software Engineer at BNP Paribas.',
    accent: '199 92% 55%',
  },
  {
    icon: Sparkles,
    title: 'What I Build',
    body: 'Passionate about scalable backend systems, frontend engineering, and system design.',
    accent: '160 70% 50%',
  },
  {
    icon: Target,
    title: 'My Goal',
    body: 'Build products used by millions.',
    accent: '43 96% 56%',
  },
];

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About"
        title="A product-minded engineer who ships."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {CARDS.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass card-hover group relative overflow-hidden rounded-3xl p-8"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: `hsl(${card.accent})` }}
              />
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                style={{
                  background: `hsl(${card.accent} / 0.12)`,
                  color: `hsl(${card.accent})`,
                }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
