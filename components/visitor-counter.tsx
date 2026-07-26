'use client';

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { count: c } = await supabase
        .from('visitors')
        .select('*', { count: 'exact', head: true });
      if (mounted && c !== null) setCount(c);
    })();

    // Record this visit (fire-and-forget)
    supabase.from('visitors').insert({}).then(({ error }) => {
      if (error) return;
      if (mounted && count !== null) setCount((p) => (p ?? 0) + 1);
    });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass flex items-center gap-3 rounded-2xl p-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Eye className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display text-xl font-bold">
          {count !== null ? count.toLocaleString() : '—'}
        </div>
        <div className="text-xs text-muted-foreground">Total visitors</div>
      </div>
    </motion.div>
  );
}
