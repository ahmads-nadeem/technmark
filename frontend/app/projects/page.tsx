import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | TechnMark Digital Marketing Agency",
  description:
    "Case studies from TechnMark: SEO, web development, Google Ads and Meta Ads results for businesses across Pakistan.",
};

type Project = {
  title: string;
  industry: string;
  services: string[];
  metric: string;
  metricLabel: string;
  description: string;
  details: { label: string; value: string }[];
};

// ⚠️ PLACEHOLDER DATA: apne real clients, projects aur numbers se replace karein.
// Galat results claim karna website ki credibility kharab kar sakta hai.
const PROJECTS: Project[] = [
  {
    title: "Fashion E-commerce Store",
    industry: "E-commerce, Lahore",
    services: ["SEO Services", "Content Marketing"],
    metric: "+340%",
    metricLabel: "Organic traffic in 6 months",
    description:
      "Store ke category aur product pages ko technical SEO se theek kiya, phir buying-intent keywords par content clusters banaye. Traffic ke saath online orders bhi barhe.",
    details: [
      { label: "Timeline", value: "6 months" },
      { label: "Focus", value: "Technical SEO, topical authority" },
      { label: "Keywords on page 1", value: "48" },
    ],
  },
  {
    title: "Dental Clinic",
    industry: "Healthcare, Karachi",
    services: ["PPC & Ads", "Web Development"],
    metric: "3x",
    metricLabel: "Appointment bookings",
    description:
      "Naya landing page aur Google Ads campaign, sirf un areas ke liye jahan se patients aate hain. Booking form aur call tracking ke saath har lead ka source nazar aata hai.",
    details: [
      { label: "Timeline", value: "3 months" },
      { label: "Focus", value: "Local search ads, landing page" },
      { label: "Cost per lead", value: "-42%" },
    ],
  },
  {
    title: "Real Estate Agency",
    industry: "Real estate, Islamabad",
    services: ["Web Development", "SEO Services"],
    metric: "96/100",
    metricLabel: "SEO score at launch",
    description:
      "Purani slow website ko Next.js par rebuild kiya. Property listings fast load hoti hain aur search engines ke liye properly structured hain.",
    details: [
      { label: "Timeline", value: "10 weeks" },
      { label: "Focus", value: "Rebuild, speed, structured data" },
      { label: "Page load", value: "4.1s to 1.2s" },
    ],
  },
  {
    title: "Textile Exporter",
    industry: "Manufacturing, Faisalabad",
    services: ["SEO Services"],
    metric: "25",
    metricLabel: "Keywords ranked on page 1",
    description:
      "International buyers ke liye link building aur technical SEO. Export-related keywords par rankings aur inquiry emails dono barhe.",
    details: [
      { label: "Timeline", value: "8 months" },
      { label: "Focus", value: "Link building, technical SEO" },
      { label: "Referring domains", value: "+60" },
    ],
  },
  {
    title: "Online Learning Academy",
    industry: "Education, Pakistan",
    services: ["PPC & Ads", "Email Marketing"],
    metric: "+86%",
    metricLabel: "Conversion rate",
    description:
      "Meta Ads se aane wale leads ke liye welcome aur follow-up email automation banayi, aur landing page ko A/B test kar ke enrollments barhaye.",
    details: [
      { label: "Timeline", value: "4 months" },
      { label: "Focus", value: "Meta Ads, email automation" },
      { label: "Email open rate", value: "41%" },
    ],
  },
  {
    title: "Restaurant Group",
    industry: "Food & beverage, Lahore",
    services: ["Social Media", "PPC & Ads"],
    metric: "2.5x",
    metricLabel: "Monthly reach",
    description:
      "Reels aur content calendar ke saath local Meta Ads. Social se walk-ins aur delivery orders ka direct track hota hai.",
    details: [
      { label: "Timeline", value: "5 months" },
      { label: "Focus", value: "Reels, local ads" },
      { label: "Platforms", value: "Instagram, Facebook" },
    ],
  },
];

function ServiceTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-[#00e676]/40 px-3 py-1 text-xs font-semibold text-[#00e676]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  const [featured, ...rest] = PROJECTS;

  return (
    <main className="relative z-10 overflow-hidden text-[#eef5ef]">
      {/* ───────── HERO ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:pt-28">
        <p className="mb-6 font-[family-name:var(--f-mono)] text-xs uppercase tracking-[0.3em] text-[#00e676]">
          Our Projects
        </p>
        <h1 className="font-[family-name:var(--f-head)] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block font-[family-name:var(--f-serif)] italic text-[#00e676]">Real Work.</span>
          <span className="block">Real Results.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Pakistan ke alag alag businesses ke saath hamara kaam, aur us se aane wale numbers. Har project
          me goal pehle tay hota hai aur result measure hota hai.
        </p>
      </section>

      {/* ───────── FEATURED PROJECT ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-8 sm:px-10">
        <article className="grid gap-10 rounded-[2rem] border border-[#00e676]/30 bg-black/40 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-[family-name:var(--f-serif)] text-7xl font-extrabold italic text-[#00e676] sm:text-8xl">
              {featured.metric}
            </p>
            <p className="mt-3 text-lg text-white/70">{featured.metricLabel}</p>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {featured.details.map((d) => (
                <div key={d.label} className="border-l-2 border-[#00e676] pl-4">
                  <dt className="text-xs text-white/50">{d.label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-white/50">{featured.industry}</p>
            <h2 className="mt-2 font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">{featured.description}</p>
            <div className="mt-6">
              <ServiceTags tags={featured.services} />
            </div>
          </div>
        </article>
      </section>

      {/* ───────── ALL OTHER PROJECTS ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-black/40 p-7 transition hover:border-[#00e676]/50"
            >
              <p className="font-[family-name:var(--f-serif)] text-5xl font-extrabold italic text-[#00e676]">
                {p.metric}
              </p>
              <p className="mt-1 text-sm text-white/60">{p.metricLabel}</p>

              <p className="mt-6 text-xs text-white/50">{p.industry}</p>
              <h3 className="mt-1 font-[family-name:var(--f-head)] text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>

              <dl className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
                {p.details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4">
                    <dt className="text-white/50">{d.label}</dt>
                    <dd className="text-right font-semibold">{d.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5">
                <ServiceTags tags={p.services} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-10 text-center sm:p-16">
          <h2 className="font-[family-name:var(--f-head)] text-4xl font-extrabold sm:text-6xl">
            <span className="font-[family-name:var(--f-serif)] italic text-[#00e676]">Your project is next.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Apna goal batayein. Hum free call me bata denge ke wahan tak pohanchne ka sab se tez rasta kya hai.
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