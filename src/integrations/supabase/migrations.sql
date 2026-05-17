-- Run these statements in the Supabase SQL editor (Database → SQL Editor → New query).
-- They are idempotent and additive: safe to re-run.

-- =============================================================================
-- 1. Leads — submissions from the discovery-call form on every page.
-- =============================================================================
create table if not exists public.leads (
  id          bigserial primary key,
  created_at  timestamptz default now() not null,
  name        text not null,
  email       text not null,
  phone       text not null,
  destination text not null,
  study_level text,
  source      text default 'website',
  user_agent  text,
  ip          text
);

alter table public.leads enable row level security;

-- Public website visitors can INSERT new leads.
drop policy if exists "anon can insert leads" on public.leads;
create policy "anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- No SELECT policy is defined → anonymous users cannot read the leads table.
-- Staff read leads via the Supabase dashboard (uses service-role key) or via a
-- future authenticated admin route.

-- =============================================================================
-- 2. Subscribers — newsletter signups from /insights.
-- =============================================================================
create table if not exists public.subscribers (
  id          bigserial primary key,
  created_at  timestamptz default now() not null,
  email       text not null unique,
  source      text default 'insights'
);

alter table public.subscribers enable row level security;

drop policy if exists "anon can insert subscribers" on public.subscribers;
create policy "anon can insert subscribers"
  on public.subscribers
  for insert
  to anon
  with check (true);

-- =============================================================================
-- 3. Helpful indexes for admin queries.
-- =============================================================================
create index if not exists leads_created_at_idx       on public.leads (created_at desc);
create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);
