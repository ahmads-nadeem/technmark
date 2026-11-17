import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | TechnMark Digital Marketing Agency",
  description:
    "SEO, web development, social media, PPC & ads, content marketing and email marketing from Pakistan's data-driven digital growth agency.",
};

type Service = {
  id: string;
  title: string;
  summary: string;
  includes: string[];
  result: string;
};


const SERVICES: Service[] = [
  {
    id: "seo",
    title: "SEO Services",
    summary:
      "Ranking the keywords on Google that your customers are actually searching for. Technical fixes, authority, and content all in one plan.",
    includes: [
      "Technical SEO audit & fixes",
      "Link building (high-authority backlinks)",
      "Topical authority and content clusters",
      "Keyword research & on-page SEO",
      "Monthly ranking & traffic reports",
    ],
    result: "Organic traffic that grows every single month.",
  },
  {
    id: "web-development",
    title: "Web Development",
    summary:
      "Fast, mobile-friendly websites built for SEO that convert visitors into inquiries.",
    includes: [
      "Next.js / React business websites",
      "Landing pages and campaign pages",
      "E-commerce stores",
      "Speed and Core Web Vitals optimization",
      "Admin dashboard and form integrations",
    ],
    result: "A website that doesn't just look good, it converts.",
  },
  {
    id: "social-media",
    title: "Social Media",
    summary:
      "A presence on Facebook, Instagram, and LinkedIn that builds an audience and establishes brand trust.",
    includes: [
      "Content calendar & post design",
      "Reels & short video ideas",
      "Community management",
      "Profile setup and optimization",
      "Monthly engagement reports",
    ],
    result: "Active audience and steady brand recognition.",
  },
  {
    id: "ppc-ads",
    title: "PPC & Ads",
    summary:
      "Paid campaigns that reach the right people and show a clear return on every single rupee.",
    includes: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook and Instagram)",
      "Retargeting campaigns",
      "Conversion tracking setup",
      "A/B testing and budget optimization",
    ],
    result: "More leads and sales at a lower cost.",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    summary:
      "Content that shows up in search, answers your audience's questions, and drives sales.",
    includes: [
      "SEO blog articles",
      "Website copywriting",
      "Case studies and guides",
      "Topic research and content strategy",
      "Content refresh for old pages",
    ],
    result: "Authority and traffic that compound over time.",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    summary:
      "Re-engaging your existing leads and customers through automated emails to drive repeat sales.",
    includes: [
      "Welcome and follow-up automation",
      "Newsletters & promotions",
      "List segmentation",
      "Abandoned cart and re-engagement flows",
      "Open and click rate reporting",
    ],
    result: "Repeat customers without spending a single rupee on new ads.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative z-10 overflow-hidden text-[#eef5ef]">
      {/* ───────── HERO ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:pt-28">
        <p className="mb-6 font-[family-name:var(--f-mono)] text-xs uppercase tracking-[0.3em] text-[#00e676]">
          Our Services
        </p>
        <h1 className="font-[family-name:var(--f-head)] text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block font-[family-name:var(--f-serif)] italic text-[#00e676]">Everything You Need.</span>
          <span className="block">One Agency.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          From SEO to ads, website development, and email marketing, we handle your entire digital growth under one roof—with every service working together seamlessly.
        </p>

        {/* quick jump links */}
        <nav aria-label="Services" className="mt-10 flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-[#00e676] hover:text-[#00e676] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00e676]"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      {/* ───────── SERVICES LIST ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 gap-8 py-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16"
            >
              <div>
                <h2 className="font-[family-name:var(--f-head)] text-2xl font-extrabold sm:text-4xl">
                  <span className="font-[family-name:var(--f-serif)] italic text-[#00e676]">{s.title}</span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">{s.summary}</p>
                <p className="mt-6 text-sm font-semibold text-[#00e676]">Result: {s.result}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-7 sm:p-8">
                <h3 className="font-[family-name:var(--f-head)] text-lg font-bold">What&apos;s included</h3>
                <ul className="mt-5 space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/75">
                      <svg
                        aria-hidden
                        viewBox="0 0 20 20"
                        className="mt-1 h-4 w-4 shrink-0 text-[#00e676]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 text-center sm:p-16">
          <h2 className="font-[family-name:var(--f-head)] text-4xl font-extrabold sm:text-6xl">
            <span className="font-[family-name:var(--f-serif)] italic text-[#00e676]">Not sure where to start?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            On our free strategy call, we review your website and tell you exactly which service will give you the highest return first.
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