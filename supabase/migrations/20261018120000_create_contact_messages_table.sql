CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(btrim(email)) BETWEEN 3 AND 254),
  message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 1 AND 5000)
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.contact_messages FROM anon, authenticated;
GRANT INSERT ON TABLE public.contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_messages" ON public.contact_messages;
CREATE POLICY "public_insert_contact_messages" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);