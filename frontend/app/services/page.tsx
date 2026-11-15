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

// Footer ki list ke mutabiq: SEO, Web Dev, Social Media, PPC & Ads, Content, Email
const SERVICES: Service[] = [
  {
    id: "seo",
    title: "SEO Services",
    summary:
      "Google par wo keywords rank karwana jin par aap ke customers search karte hain. Technical fixes, authority aur content ek hi plan me.",
    includes: [
      "Technical SEO audit aur fixes",
      "Link building (high-authority backlinks)",
      "Topical authority aur content clusters",
      "Keyword research aur on-page SEO",
      "Monthly ranking aur traffic reports",
    ],
    result: "Organic traffic jo har mahine barhta hai",
  },
  {
    id: "web-development",
    title: "Web Development",
    summary:
      "Tez, mobile-friendly websites jo SEO ke liye bani hon aur visitors ko inquiries me badlen.",
    includes: [
      "Next.js / React business websites",
      "Landing pages aur campaign pages",
      "E-commerce stores",
      "Speed aur Core Web Vitals optimization",
      "Admin dashboard aur form integrations",
    ],
    result: "Website jo sirf dikhti nahi, convert bhi karti hai",
  },
  {
    id: "social-media",
    title: "Social Media",
    summary:
      "Facebook, Instagram aur LinkedIn par aisi presence jo audience banaye aur brand ko trust dilaye.",
    includes: [
      "Content calendar aur post design",
      "Reels aur short video ideas",
      "Community management",
      "Profile setup aur optimization",
      "Monthly engagement reports",
    ],
    result: "Active audience aur steady brand recognition",
  },
  {
    id: "ppc-ads",
    title: "PPC & Ads",
    summary:
      "Paid campaigns jo sahi logon tak pohanchti hain aur har rupay ka hisaab dikhati hain.",
    includes: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook aur Instagram)",
      "Retargeting campaigns",
      "Conversion tracking setup",
      "A/B testing aur budget optimization",
    ],
    result: "Kam cost par zyada leads aur sales",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    summary:
      "Aisa content jo search me milta hai, audience ke sawalon ka jawab deta hai aur sale ki taraf le jata hai.",
    includes: [
      "SEO blog articles",
      "Website copywriting",
      "Case studies aur guides",
      "Topic research aur content strategy",
      "Content refresh for old pages",
    ],
    result: "Authority aur traffic jo waqt ke saath compound hota hai",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    summary:
      "Apne existing leads aur customers ko automated emails se wapas la kar repeat sales barhana.",
    includes: [
      "Welcome aur follow-up automation",
      "Newsletters aur promotions",
      "List segmentation",
      "Abandoned cart aur re-engagement flows",
      "Open aur click rate reporting",
    ],
    result: "Repeat customers bina naye ad spend ke",
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
        <h1 className="font-[family-name:var(--f-head)] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block font-[family-name:var(--f-serif)] italic text-[#00e676]">Everything You Need.</span>
          <span className="block">One Agency.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          SEO se le kar ads, website aur email tak, hum aap ki poori digital growth ek hi jagah sambhalte
          hain. Sab services ek doosre ke saath mil kar kaam karti hain.
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
                <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-4xl">
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
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-10 text-center sm:p-16">
          <h2 className="font-[family-name:var(--f-head)] text-4xl font-extrabold sm:text-6xl">
            <span className="font-[family-name:var(--f-serif)] italic text-[#00e676]">Not sure where to start?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Free strategy call me hum aap ki website dekh kar batate hain ke pehle kaunsi service se sab se
            zyada fayda hoga.
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