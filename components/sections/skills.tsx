'use client';

import { motion } from 'framer-motion';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { SKILL_GROUPS } from '@/lib/data';

export function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for."
        description="A curated toolkit across the stack — from systems to interfaces."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass card-hover group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                style={{ background: `hsl(${group.accent})` }}
              />
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    background: `hsl(${group.accent} / 0.12)`,
                    color: `hsl(${group.accent})`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="group/badge relative cursor-default rounded-full border px-3 py-1.5 text-xs font-medium"
                    style={{
                      borderColor: `hsl(${group.accent} / 0.25)`,
                      background: `hsl(${group.accent} / 0.06)`,
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover/badge:opacity-100"
                      style={{
                        background: `hsl(${group.accent} / 0.15)`,
                        boxShadow: `0 0 16px hsl(${group.accent} / 0.4)`,
                      }}
                    />
                    <span className="relative">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
