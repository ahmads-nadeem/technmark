"use client";

import { useState, type ReactNode } from 'react';
import Link from 'next/link';

const H = 'font-[family-name:var(--f-head)]';
const M = 'font-[family-name:var(--f-mono)]';
const S = 'font-[family-name:var(--f-serif)]';
const wrap = 'mx-auto w-full max-w-[1920px] px-5 md:px-[clamp(24px,3.75vw,60px)]';
const btnBase = `${M} flex items-center justify-center whitespace-nowrap rounded-full bg-[#06d66a] text-[clamp(14px,1vw,19px)] font-bold tracking-[0.12em] text-[#04130b] transition hover:brightness-110`;
const btn = `${btnBase} w-full px-6 py-3 sm:w-[45%] sm:px-1 sm:py-2`;
const card = 'rounded-[28px] bg-[#0b1511]';

/* ---------- Content ---------- */
const BARS = [
  { label: 'SEO Score', value: '96/100', w: 96 },
  { label: 'Conversion Rate', value: '+86%', w: 85 },
  { label: 'Domain Authority', value: '+28 DA', w: 70 },
  { label: 'Brand Visibility', value: '+194%', w: 92 },
];

const CLIENTS = ['', 'NISHAT', 'TWIN LAKE', 'XI', 'Experts'];

const STATS = [
  { n: '50+', l: 'Businesses Served', icon: 'heart' },
  { n: '3.2x', l: 'Average ROAS', icon: 'bars' },
  { n: '120%', l: 'Average Organic Growth', icon: 'chart' },
  { n: '5+', l: 'Years Experience', icon: 'case' },
];

const PROBLEMS = [
  'Low search ranking and visibility',
  "Ineffective websites that don't convert",
  'High ad spend with poor returns',
  'Inconsistent leads and sales',
  'No strategy for long-term growth',
];
const SOLUTIONS = [
  'Strategy-led approach for sustainable growth',
  'High-performing websites built for conversions',
  'SEO, content & ads that drive qualified traffic',
  'Automation that turns leads into customers',
  'Transparent reporting & continious optimization',
];

const SERVICES = [
  { t: 'SEO & Search Marketing', d: 'Dominate Google rankings technically, editorially, and locally across Pakistan and global markets.', tags: ['Technical', 'On-Page', 'Link Building', 'Local SEO'] },
  { t: 'Web Development', d: 'Fast, beautiful, conversion-optimized websites in WordPress, React, Shopify and WooCommerce.', tags: ['WordPress', 'React', 'E-Commerce', 'Big Commerce'] },
  { t: 'Social Media Marketing', d: 'Build an engaged audience across Instagram, TikTok, Facebook, and LinkedIn with creative strategy.', tags: ['Content', 'Paid Social', 'Community'] },
  { t: 'PPC & Paid Advertising', d: 'Maximum ROI from Google Ads, Meta Ads, and YouTube with relentless optimization.', tags: ['Google', 'Meta', 'Remarketing'] },
  { t: 'Content Marketing', d: 'Authority-building semantic content that ranks, educates, and converts at every funnel stage.', tags: ['Copywriting', 'Pillar Pages', 'Blogging'] },
  { t: 'Email Marketing & Automation', d: 'Your highest-ROI channel  intelligent automation and campaigns that convert around the clock.', tags: ['Automation', 'Newsletters', 'Drip'] },
];

const STEPS = [
  { t: 'Discovery & Audit', d: 'Deep dive into your business, competitors, and digital presence. Full technical and content audit with clear gap analysis.' },
  { t: 'Strategy Blueprint', d: 'Custom SEO, CRO, and content roadmap around your goals and budget. No templates — 100% bespoke.' },
  { t: 'Execute & Launch', d: 'Campaigns, content, code, and creatives implemented with precision. Fast, thorough, accountable delivery.' },
  { t: 'Measure & Scale', d: 'Monthly data-driven reporting with clear ROI metrics. Continuous optimization to compound your results.' },
];

const TESTIMONIALS = [
  { name: 'Wasi Shah', role: 'CEO | Expert IT Solution', text: '"Our Google Ads cost per lead dropped 60% within 6 weeks. Transparent, data-driven, and genuinely obsessed with our results."' },
  { name: 'Asif', role: 'Marketing Head| SGICL', text: '"TechnMark tripled our organic traffic in 4 months. Their SEO team understands the Pakistani market better than anyone — honest, data-driven, and they deliver every time."' },
  { name: 'Donald', role: 'CEO | DW Experts', text: '"TechnMark tripled our organic traffic in 4 months. Their SEO team understands the US market better than anyone honest, data-driven, and they deliver every time."' },
];

const WHY = [
  { t: 'Strategy Before Spend', d: 'We identify where your biggest growth opportunities actually are before recommending campaigns or channels.' },
  { t: 'Continuous Optimization', d: "We don't launch campaigns and disappear. We measure, learn and improve continuously." },
  { t: 'Transparent Reporting', d: "You see what changed, why it changed and what we're doing next." },
  { t: 'Traffic + Conversion', d: "More visitors mean nothing if they don't become leads, customers or revenue." },
];

const WHO = [
  { t: 'E-commerce', d: 'More qualified traffic, better product visibility and higher conversion rates.' },
  { t: 'B2B', d: 'More visibility, qualified leads and high-value enquiries.' },
  { t: 'Startups', d: 'Build the digital foundation correctly from day one.' },
  { t: 'Traffic + Conversion', d: "More visitors mean nothing if they don't become leads, customers or revenue." },
];

const FAQ = [
  { q: 'Do you work with businesses outside Pakistan?', a: 'Yes. We work with clients across Pakistan, the US and other global markets.' },
  { q: 'How much do your services cost?', a: 'Pricing depends on your goals and scope. Book a free audit and we will share a custom proposal.' },
  { q: 'How long does SEO take?', a: 'Most businesses see early movement in 2–3 months, with compounding results over 6–12 months.' },
  { q: 'Do you only provide SEO?', a: 'No. We also offer web development, social media, PPC, content and email automation.' },
  { q: 'Can you work with our existing website?', a: 'Absolutely. We audit what you have and improve it, or rebuild only where needed.' },
  { q: 'What happens after I request the audit?', a: 'We review your business and website, then send you a clear gap analysis and growth plan.' },
];

/* ---------- Small pieces ---------- */
function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={`${M} flex items-center gap-4 text-[15px] font-medium uppercase tracking-[0.35em] text-[#00e676] ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-[clamp(16px,1.875vw,30px)] bg-[#00e676]" />
      {children}
    </div>
  );
}

function Check({ color = '#00e676', size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}
function Cross() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f00" strokeWidth="4" strokeLinecap="round" className="shrink-0">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function StatIcon({ kind }: { kind: string }) {
  const p = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#00e676', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (kind === 'heart') return <svg {...p}><path d="M12 9.5s-3-2-3-4a2 2 0 013-1.5A2 2 0 0115 5.5c0 2-3 4-3 4z" fill="#00e676" /><path d="M3 16h5l4 2 6-2M3 20h12" /></svg>;
  if (kind === 'bars') return <svg {...p}><path d="M4 20V14M9 20V11M14 20V13M19 20V8M4 10l5-4 4 3 7-6" /></svg>;
  if (kind === 'chart') return <svg {...p}><path d="M3 4v16h18M7 15l4-4 3 3 6-6" /></svg>;
  return <svg {...p}><rect x="3" y="8" width="14" height="11" rx="2" fill="#00e676" /><path d="M7 8V6h6v2" /><circle cx="18" cy="17" r="4" fill="#0b1511" /><path d="M18 15v2l1 1" /></svg>;
}

/* ---------- Page ---------- */
export default function Page() {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const visible = [0, 1, 2].map((i) => TESTIMONIALS[(slide + i) % TESTIMONIALS.length]);
  const prev = () => setSlide((s) => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setSlide((s) => (s + 1) % TESTIMONIALS.length);

  return (
    <main>
      {/* Hero */}
      <section className={`${wrap} grid gap-12 pt-10 md:pt-16 pb-12 md:pb-20 lg:grid-cols-[1.05fr_0.95fr]`}>
        <div>
          <h1 className="leading-[1.02]">
            <span className={`${S} block text-[clamp(40px,5.6vw,75px)] font-extrabold italic text-[#00e676]`}>Grow Smarter.</span>
            <span className={`${H} block text-[clamp(40px,5.6vw,80px)] font-extrabold tracking-tight text-[#eef5f0]`}>Rank Higher.</span>
            <span className={`${H} block text-[clamp(40px,5.6vw,80px)] font-extrabold tracking-tight text-[#eef5f0]`}>Convert More.</span>
          </h1>
          <p className="mt-14 max-w-[800px] text-[clamp(16px,1.625vw,16px)] leading-[1.7] text-white/55">
            TechnMark is Pakistan&rsquo;s elite digital growth agency combining deep data-driven paid marketing, conversion-first web development, semantic content architecture, and technical SEO to make your brand unstoppable locally and globally.
          </p>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[clamp(14px,1.25vw,20px)] text-white/40">
            {['More Traffic', 'Better Leads', 'Higher Sales'].map((t) => (
              <span key={t} className="flex items-center gap-4"><Check />{t}</span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className={`${btn} `}>Get My Free Audit</Link>
            <Link href="/services" className={`${M} inline-flex w-full items-center justify-center rounded-full border border-white/20 px-10 py-3 text-[clamp(14px,1vw,19px)] font-bold tracking-[0.12em] text-white/45 transition hover:border-[#00e676] hover:text-[#00e676] sm:w-auto sm:justify-start sm:py-2`}>
              Explore Services
            </Link>
          </div>
          {/* <Link href="/projects" className="mt-10 block w-fit">
            <img src="/images/hire-project.jpg" alt="Hire us for a project" className="h-[clamp(94px,10.625vw,170px)] w-[clamp(140px,15.875vw,254px)] bg-[#c4d0d4] object-cover" />
            <span className={`${H} mt-4 block text-[clamp(16px,1.625vw,26px)] font-semibold text-white`}>Hire us for a project</span>
          </Link> */}
        </div>

        {/* Metrics card */}
        <div className="">
          <div className="rounded-[48px] border border-[#0f2b1e]  from-[#08140f] to-[#0a2418] p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className={`${M} text-[12px] font-medium uppercase tracking-[0.3em] text-[#00e676]`}>Organic Traffic Growth</div>
                <div className={`${S} mt-6 text-[clamp(53px,5.5vw,25px)] font-bold leading-none`}>+340%</div>
              </div>
              <div className="flex justify-start w-fit shrink-0 sm:w-[30%] items-center gap-4 rounded-[8px] border border-[#0f4a2c] bg-[#0b2a1b] mt-8 px-3 py-2 sm:px-2 text-[clamp(14px,1.312vw,21px)] font-medium leading-tight text-[#00e676]">
                <span className="text-[12px]">▲</span>
                <span className='flex flex-col whitespace-nowrap text-[12px] font-bold'>
                  <span className='mb-1'>6-Month</span>
                  <span>Result</span>
                </span>
              </div>
            </div>
            <div className="mt-14 space-y-8">
              {BARS.map((b) => (
                <div key={b.label}>
                  <div className="mb-3 flex justify-between text-[clamp(14px,1.375vw,22px)]">
                    <span className="text-white/85">{b.label}</span>
                    <span className="font-bold text-[#00e676]">{b.value}</span>
                  </div>
                  <div className="h-[9px] rounded-full bg-white/[0.07]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#00c853] to-[#00e676]" style={{ width: `${b.w}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className={`${wrap} pt-10`}>
        <Eyebrow>Trusted by</Eyebrow>
        <div className="mt-8 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <h2 className={`${H} max-w-[50%] text-[clamp(30px,1vw,30px)] font-bold leading-[1.1] tracking-tight`}>
            Helping Businesses across Pakistan, US &amp; global markets grow.
          </h2>
          <div className="flex flex-wrap items-center gap-12 opacity-90">
            {CLIENTS.map((c, i) => (
              <span key={i} className={`${H} text-[clamp(14px,1.5vw,24px)] font-semibold ${c === 'NISHAT' ? 'text-[#1b3a9e]' : 'text-white/80'}`}>{c || '•'}</span>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="flex items-start gap-6 rounded-[15px] border border-[#00e676] bg-[#071a11] p-4 pr-6 min-h-[clamp(63px,9vw,162px)]">
              <div className="flex h-[clamp(50px,5.625vw,90px)] w-[clamp(50px,5.625vw,90px)] shrink-0 items-center justify-center rounded-2xl bg-[#0b2a1b]"><StatIcon kind={s.icon} /></div>
              <div className="pt-2">
                <div className="text-[clamp(25px,2vw,42px)] font-medium leading-none text-[#00e676]">{s.n}</div>
                <div className="mt-3 text-[clamp(13px,1vw,20px)] leading-snug text-white/65">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges / Solutions */}
      <section className={`${wrap} pt-16 md:pt-28`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <Eyebrow>The Challenges</Eyebrow>
            <h3 className={`${H} mt-8 max-w-[560px] text-[clamp(18px,1.875vw,30px)] font-bold leading-[1.05]`}>Most Businesses Struggle With Digital Growth</h3>
            <ul className="mt-8 space-y-3 text-[clamp(13px,1.2vw,22px)] text-white/65">
              {PROBLEMS.map((p) => <li key={p} className="flex items-center gap-2"><Cross />{p}</li>)}
            </ul>
          </div>
          <div className="mx-auto flex aspect-square w-[clamp(150px,18vw,280px)] shrink-0 items-center justify-center rounded-full border-[12px] border-[#00e676]">
            <svg className="h-[40%] w-[45%]" viewBox="0 0 150 120" fill="none" stroke="#00e676" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 6v100h134" />
              <path d="M34 70l28-24 22 22 46-44" />
              <path d="M104 24h30v30" fill="#00e676" />
            </svg>
          </div>
          <div>
            <Eyebrow>Our Solutions</Eyebrow>
            <h3 className={`${H} mt-8 max-w-[560px] text-[clamp(18px,1.875vw,30px)] font-bold leading-[1.05]`}>An Integrated Growth System That Delivers Results</h3>
            <ul className="mt-8 space-y-2 text-[clamp(13px,1.2vw,22px] leading-snug text-white/65">
              {SOLUTIONS.map((p) => <li key={p} className="flex items-center gap-6"><Check size={30} />{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className={`${wrap} pt-16 md:pt-28`}>
        <Eyebrow>What we do</Eyebrow>
        <h2 className={`${H} mt-8 text-[clamp(30px,5vw,84px)] font-extrabold leading-[1.05] tracking-tight`}>Every digital service your brand <span className='text-[#00e676]'>needs</span></h2>
        <div className="mt-10 md:mt-16 grid gap-[clamp(12px,1.875vw,30px)] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.t} className={`${card} min-h-[clamp(194px,30.375vw,486px)] p-[clamp(24px,3.75vw,60px)]`}>
              <div className={`${M} text-[clamp(38px,4vw,64px)] leading-none text-white/25`}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={`${H} mt-4 text-[clamp(17px,1.1vw,31px)] font-bold tracking-tight`}>{s.t}</h3>
              <p className="mt-4 text-[clamp(13px,1vw,21px)] leading-[1.55] text-white/90">{s.d}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {s.tags.map((t) => (
                  <span key={t} className={`${M} rounded-full border border-[#0f4a2c] px-4 py-1 text-[12px] uppercase tracking-[0.12em] text-[#00e676]`}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={`px-10 pb-10 bg-[#0b1511]`}>
        <div className="mt-14 md:mt-24 flex flex-col items-start justify-between gap-8 pt-10 md:pt-10 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex h-[clamp(57px,6.5vw,104px)] w-[clamp(57px,6.5vw,104px)] shrink-0 items-center justify-center rounded-full border-[5px] border-[#00e676]">
              <svg className="h-[45%] w-[45%]" viewBox="0 0 24 24" fill="#00e676"><path d="M14 3c4 0 7 1 7 1s1 3 1 7c0 3-2 5-4 7l-3-1-3-3-1-3c2-2 3-5 3-8zM8 14l3 3-3 1-2 3-1-4 3-3z" /></svg>
            </div>
            <div>
              <h3 className={`${H} text-[clamp(20px,2vw,30px)] font-bold tracking-tight`}>Not sure which service is right for you?</h3>
              <p className="mt-3 text-[clamp(10px,1vw,20px)] text-white/85">We&apos;ll identify the biggest growth opportunities across Paid Ads, SEO, Website, content and conversation.</p>
            </div>
          </div>
          <Link href="/contact" className={`${btn} md:w-55 px-0 shrink-0`}>Get My Free Audit</Link>
        </div>
        
      </section>

      {/* How it works */}
      <section className={`${wrap} pt-16 md:pt-28`}>
        <Eyebrow>How it works</Eyebrow>
        <h2 className={`${H} mt-10 max-w-[1400px] text-[clamp(34px,5.4vw,88px)] font-extrabold leading-[1.05] tracking-tight`}>
          Here&apos;s exactly what happens <br /> <span className='text-[#00e676]'>after you contact us.</span>
        </h2>
        <div className="mt-14 md:mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.t} className="rounded-[28px] border border-[#0a1a13] px-4 py-8 text-center">
              <div className={`${S} text-[clamp(48px,5vw,80px)] font-bold leading-none text-[#00e676]`}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={`${H} mt-8 text-[clamp(19px,2vw,32px)] font-semibold`}>{s.t}</h3>
              <p className="mx-auto mt-5 max-w-[340px] text-[clamp(14px,1.312vw,21px)] leading-[1.5] text-white/55">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer stories */}
      <section className={`${wrap} pt-20 md:pt-32`}>
        <Eyebrow>Customer stories</Eyebrow>
        <h2 className={`${H} mt-8 text-[clamp(34px,5.4vw,88px)] font-extrabold leading-[1.05] tracking-tight`}>Real results. <span className='text-[#00e676]'><i>Real businesses.</i></span></h2>
        <div className="relative mt-12 md:mt-20 px-9 md:px-11">
          <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 text-3xl text-white">‹</button>
          <div className="grid gap-4 md:grid-cols-3">
            {visible.map((t, i) => (
              <figure key={`${t.name}-${i}`} className={`min-h-[clamp(164px,25.625vw,410px)] rounded-[40px] border border-[#00e676]/80 px-[clamp(30px,4.688vw,75px)] py-[clamp(30px,4.688vw,75px)] ${i > 0 ? 'hidden md:block' : ''}`}>
                <figcaption>
                  <div className={`${M} text-[clamp(14px,1.375vw,22px)] font-bold`}>{t.name}</div>
                  <div className="mt-3 text-[18px] tracking-[0.2em] text-[#00e676]">★★★★★</div>
                  <div className={`${M} mt-3 text-[19px] text-white/45`}>{t.role}</div>
                </figcaption>
                <blockquote className="mt-6 text-[clamp(14px,1.438vw,23px)] leading-[1.3] text-white/95">{t.text}</blockquote>
              </figure>
            ))}
          </div>
          <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 text-3xl text-white">›</button>
        </div>
      </section>

      {/* Why TechnMark */}
      <section className={`${wrap} pt-20 md:pt-32`}>
        <Eyebrow>Why TechnMark</Eyebrow>
        <h2 className={`${H} mt-8 text-[clamp(25px,5.8vw,55px)] font-extrabold leading-[1.05] tracking-tight`}>
          We don&apos;t chase vanity metrics.<br />We build <span className='text-[#00e676]'><i>growth systems.</i></span>
        </h2>
        <div className="mt-10 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <div key={w.t} className={`${card} min-h-[clamp(117px,18.25vw,292px)] p-6 md:p-[clamp(12px,1.875vw,30px)]`}>
              <h3 className={`${H} max-w-[260px] text-[clamp(19px,2vw,32px)] font-semibold leading-[1.1]`}>{w.t}</h3>
              <p className="mt-6 text-[clamp(14px,1.375vw,22px)] leading-[1.45] text-white/55">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we help */}
      <section className={`${wrap} pt-20 md:pt-32`}>
        <Eyebrow>Who we help</Eyebrow>
        <h2 className={`${H} mt-8 text-[clamp(34px,5.4vw,88px)] font-extrabold leading-[1.05] tracking-tight`}>Built for businesses <br /> <span className='text-[#00e676]'><i>ready to grow.</i></span></h2>
        <div className="mt-10 md:mt-16 grid gap-[clamp(12px,1.875vw,30px)] md:grid-cols-2 lg:grid-cols-4">
          {WHO.map((w) => (
            <div key={w.t} className="min-h-[clamp(90px,14.125vw,226px)] rounded-[40px] border border-white/25 p-6 md:p-[clamp(12px,1.875vw,30px)]">
              <h3 className={`${H} text-[clamp(19px,2vw,32px)] font-semibold`}>{w.t}</h3>
              <p className="mt-5 text-[clamp(14px,1.375vw,22px)] leading-[1.45] text-white/55">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${wrap} pt-20 md:pt-32`}>
        <Eyebrow center>FAQ</Eyebrow>
        <h2 className={`${H} mt-8 text-center text-[clamp(34px,5.4vw,88px)] font-extrabold leading-[1.05] tracking-tight`}>Before you get started.</h2>
        <div className="mx-auto mt-14 md:mt-24 max-w-[1200px] space-y-[30px]">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-[28px] border border-white/30">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-[clamp(12px,1.875vw,30px)] py-[clamp(14px,2.125vw,34px)] text-left"
                >
                  <span className={`${H} text-[clamp(16px,1.625vw,26px)] font-semibold`}>{f.q}</span>
                  <span className="text-[clamp(23px,2.375vw,38px)] leading-none">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="px-[clamp(12px,1.875vw,30px)] pb-8 text-[clamp(14px,1.375vw,22px)] leading-[1.5] text-white/60">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 md:mt-32 border-t border-[#0d2a1c] bg-[#08100c] px-5 py-20 md:py-32 text-center">
        <div className="text-[clamp(21px,1vw,33px)] tracking-[0.2em] text-[#f0a64a]">★★★★★</div>
        <p className="mt-5 text-[clamp(12px,1.1vw,18px)] text-white">Trusted by 150+ Satisfied Clients Globally.</p>
        <h2 className={`${H} mx-auto mt-5 max-w-[1250px] text-[clamp(30px,5vw,85px)] font-extrabold leading-[1.05] tracking-tight`}>
          Ready to Turn Your <br /> <span className='text-[#00e676]'><i>Digital Presence into a</i></span> <br /> Growth Engine?
        </h2>
        <p className="mt-10 text-[clamp(12px,1.2vw,20px)] text-white">Let&rsquo;s discuss your goals and create a custom strategy to grow your business.</p>
        <Link href="/contact" className={`${btnBase} mx-auto mt-12 w-full max-w-[340px] px-4 py-3 sm:w-auto sm:max-w-none sm:px-10 sm:py-2 md:w-75 md:px-0`}>Get a Free Strategy Call</Link>
      </section>
    </main>
  );
}