/*
# Create visitors table for visitor counter

1. New Tables
- `visitors`
- `id` (uuid, primary key)
- `visited_at` (timestamp, defaults to now)
- `user_agent` (text, nullable — for lightweight analytics)
2. Security
- Enable RLS on `visitors`.
- Allow anon + authenticated to insert (record a visit) and select count.
- This is intentionally public/shared data (single-tenant portfolio, no sign-in).
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visited_at timestamptz DEFAULT now(),
  user_agent text
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_visitors" ON visitors;
CREATE POLICY "anon_insert_visitors" ON visitors FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_visitors" ON visitors;
CREATE POLICY "anon_select_visitors" ON visitors FOR SELECT
  TO anon, authenticated USING (true);
