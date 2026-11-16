import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | TechnMark Digital Marketing Agency",
  description:
    "TechnMark is Pakistan's data-driven digital growth agency: SEO, web development, Google Ads and Meta Ads.",
};


const STATS = [
  { value: "+340%", label: "Average organic traffic growth in 6 months" },
  { value: "120+", label: "Projects delivered" },
  { value: "96/100", label: "Average SEO score at launch" },
  { value: "+86%", label: "Average conversion rate lift" },
];

const SERVICES = [
  { title: "Link Building", text: "Relevant, high-authority backlinks that earn trust with search engines." },
  { title: "Technical SEO", text: "Speed, crawlability and structure fixed so Google can read your site properly." },
  { title: "Web Development", text: "Fast, conversion-first websites built with Next.js and modern tooling." },
  { title: "Google Ads", text: "Search campaigns that target buyers, not browsers." },
  { title: "Meta Ads", text: "Facebook and Instagram ads tested creative by creative." },
  { title: "Topical Authority", text: "Content clusters that make your brand the answer for your niche." },
];

const VALUES = [
  { title: "Data before opinions", text: "Every decision is driven by numbers: rankings, traffic, and conversions. No guesswork." },
  { title: "Honest reporting", text: "You see what actually happens. Monthly reports have both wins and misses." },
  { title: "Built for conversion", text: "Traffic is just the beginning. We design pages and ads for inquiries and sales." },
];

const PROCESS = [
  { title: "Audit", text: "Full analysis of the website, competitors, and keywords." },
  { title: "Strategy", text: "A clear plan of priorities, timeline, and KPIs." },
  { title: "Execute", text: "SEO, development, and ads work together." },
  { title: "Measure & scale", text: "We increase the budget on what is working." },
];

export default function AboutPage() {
  return (
    <main className={`relative z-10 overflow-hidden text-[#eef5ef]`}>

      {/* ───────── HERO ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:pt-28">
        <p className={`font-[family-name:var(--f-mono)] mb-6 text-xs uppercase tracking-[0.3em] text-[#00e676]`}>
          About TechnMark
        </p>
        <h1 className="font-[family-name:var(--f-head)] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className={`font-[family-name:var(--f-serif)] italic block text-[#00e676]`}>We Build.</span>
          <span className="block">You Grow.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          TechnMark is Pakistan's data-driven digital growth agency. We combine deep SEO, conversion-first web development, and paid ads to make your brand unstoppable locally and globally.
        </p>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-black/40 p-8">
              <p className={`font-[family-name:var(--f-serif)] italic text-5xl font-extrabold text-[#00e676]`}>{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── STORY / MISSION ───────── */}
      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-24 sm:px-10 lg:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-5xl">
            <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>Our story</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65">
            <p>
              We started TechnMark because many Pakistani businesses invest in a good website and ads, yet don't get results. The reason is usually a lack of strategy, not budget.
            </p>
            <p>
              Today, our team consists of SEO specialists, developers, and ad strategists working toward a single goal: making your growth measurable.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#00e676]/30 bg-[#00e676]/[0.06] p-8 sm:p-10">
          <h3 className="font-[family-name:var(--f-head)] text-xl font-bold text-[#00e676]">Our mission</h3>
          <p className="mt-3 text-lg leading-relaxed text-white/80">
            Giving every business the same digital growth tools that large companies use, with clear reporting and real results.
          </p>
          <h3 className="font-[family-name:var(--f-head)] mt-8 text-xl font-bold text-[#00e676]">Our vision</h3>
          <p className="mt-3 text-lg leading-relaxed text-white/80">
            To become Pakistan's most trusted digital marketing agency, taking local brands to global markets.
          </p>
        </div>
      </section>

      {/* ───────── WHAT WE DO ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-5xl">
          What we <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>do</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#00e676]/50"
            >
              <h3 className="font-[family-name:var(--f-head)] text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── VALUES ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-5xl">
          How we <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>work</span>
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-l-2 border-[#00e676] pl-6">
              <h3 className="font-[family-name:var(--f-head)] text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-5xl">
          Our <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>process</span>
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
              <span className={`font-[family-name:var(--f-mono)] text-sm font-bold text-[#00e676]`}>Step {i + 1}</span>
              <h3 className="font-[family-name:var(--f-head)] mt-3 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-[family-name:var(--f-head)] text-4xl font-extrabold sm:text-6xl">
            <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>Ready to grow?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
              Get a free SEO and conversion audit for your website. No commitment.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#00e676] px-10 py-4 text-sm font-extrabold tracking-wider text-black transition hover:bg-[#33ff99] hover:shadow-[0_0_30px_rgba(0,230,118,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00e676]"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </main>
  );
}