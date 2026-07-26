'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';

const SOCIALS = [
  { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: Mail, href: SOCIAL_LINKS.email, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/5">
              <ArrowUp className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </span>
          </button>

          <Link href="/" className="font-display text-xl font-semibold tracking-tight">
            Tushar Gangurde
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Associate Software Engineer · Building scalable software and intuitive
            digital experiences.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tushar Gangurde · Designed & built with care.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
