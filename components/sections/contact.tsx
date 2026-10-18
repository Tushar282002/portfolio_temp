'use client';

import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Mail, Linkedin, Github, Twitter, FileText, Send } from 'lucide-react';
import { useState } from 'react';
import { SectionShell, SectionHeading } from '@/components/section-primitives';
import { SOCIAL_LINKS } from '@/lib/data';
import { VisitorCounter } from '@/components/visitor-counter';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const CONTACT_BUTTONS = [
  { label: 'Email', href: SOCIAL_LINKS.email, icon: Mail, accent: '199 92% 55%' },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: Linkedin, accent: '0 72% 56%' },
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: Github, accent: '160 70% 50%' },
  { label: 'Twitter/X', href: SOCIAL_LINKS.twitter, icon: Twitter, accent: '199 92% 55%' },
  { label: 'Resume', href: SOCIAL_LINKS.resume, icon: FileText, accent: '43 96% 56%' },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setForm({ name: '', email: '', message: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Amazing Together."
        description="I'm open to roles, collaborations, and conversations."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-8"
        >
          <div className="space-y-3">
            {CONTACT_BUTTONS.map((btn, i) => {
              const Icon = btn.icon;
              return (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ x: 6 }}
                  className="glass card-hover group flex items-center gap-4 rounded-2xl p-4"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{
                      background: `hsl(${btn.accent} / 0.12)`,
                      color: `hsl(${btn.accent})`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{btn.label}</span>
                  <Send className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              );
            })}
          </div>
          <VisitorCounter />
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-8"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] hover:glow-primary active:scale-95 disabled:cursor-wait disabled:opacity-60"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              {status === 'submitting' ? 'Saving...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p role="status" className="text-sm text-green-600">
                Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-destructive">
                We couldn&apos;t save your message. Please try again later.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}
