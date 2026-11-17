"use client";

import { useState } from "react";

const SERVICES = [
  "Link Building",
  "Technical SEO",
  "Web Development",
  "Google Ads",
  "Meta Ads",
  "Topical Authority",
  "Not sure yet",
];

const CONTACT_INFO = [
  { label: "Email", value: "hello@technmark.com", href: "mailto:hello@technmark.com" },
  { label: "Phone / WhatsApp", value: "+92 3417910534", href: "https://wa.me/923417910534" },
  { label: "Office", value: "Faisalabad, Pakistan", href: undefined },
  { label: "Hours", value: "Mon – Sat, 10am – 7pm PKT", href: undefined },
];

const NEXT_STEPS = [
  { title: "We read your message", text: "We review your details to fully understand your business and unique goals." },
  { title: "Reply within 24 hours", text: "You receive your call slot and details directly via email or WhatsApp." },
  { title: "Free strategy call", text: "A 30-minute call where we share a quick audit of your website and your top competitors." },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0],
    website: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", service: SERVICES[0], website: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3.5 text-base sm:text-[15px] text-[#eef5ef] placeholder:text-white/30 outline-none transition focus:border-[#00e676] focus:ring-2 focus:ring-[#00e676]/30";
  const label = `font-[family-name:var(--f-mono)] mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#00e676]`;

  return (
    <main className={`relative z-10 min-h-screen overflow-hidden text-[#eef5ef]`}>
      {/* soft green glow */}

      {/* ───────── HERO ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:pt-28">
        <p className={`font-[family-name:var(--f-mono)] mb-6 text-xs uppercase tracking-[0.3em] text-[#00e676]`}>
          Contact TechnMark
        </p>
        <h1 className="font-[family-name:var(--f-head)] text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className={`font-[family-name:var(--f-serif)] italic block font-extrabold text-[#00e676]`}>Let&apos;s Talk.</span>
          <span className="block">Grow Together.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Tell us about your website, ads, or SEO goals, and we&apos;ll come back with a data-driven plan designed to rank your brand both locally and globally.
        </p>
      </section>

      {/* ───────── FORM + INFO ───────── */}
      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-24 sm:px-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* Form */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-10">
          <h2 className="font-[family-name:var(--f-head)] text-2xl font-bold sm:text-3xl">Send us a message</h2>
          <p className="mt-2 text-sm text-white/50">Required fields are marked with an asterisk (*).</p>

          {status === "sent" ? (
            <div
              role="status"
              className="mt-8 rounded-2xl border border-[#00e676]/40 bg-[#00e676]/10 p-6"
            >
              <p className="text-lg font-semibold text-[#00e676]">Message sent</p>
              <p className="mt-1 text-sm text-white/70">
                Thank you! We will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-semibold text-white underline underline-offset-4 hover:text-[#00e676]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Full name *</label>
                <input id="name" required value={form.name} onChange={update("name")} placeholder="Ali Khan" className={field} />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email *</label>
                <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="ali@company.com" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className={label}>Phone / WhatsApp</label>
                <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+92 300 0000000" className={field} />
              </div>
              <div>
                <label htmlFor="service" className={label}>Service *</label>
                <select id="service" value={form.service} onChange={update("service")} className={`${field} appearance-none`}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#0d0d0d]">{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="website" className={label}>Your website</label>
                <input id="website" type="url" value={form.website} onChange={update("website")} placeholder="https://yourwebsite.com" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>Project details *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What is your business, and what is your next growth goal?"
                  className={`${field} resize-none`}
                />
              </div>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-[#00e676] px-9 py-4 text-sm font-extrabold tracking-wider text-black transition hover:bg-[#33ff99] hover:shadow-[0_0_30px_rgba(0,230,118,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00e676] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    Message failed to send. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>

        <aside className="flex flex-col gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <p className={`font-[family-name:var(--f-mono)] text-[11px] uppercase tracking-[0.25em] text-[#00e676]`}>
              Reach us directly
            </p>
            <dl className="mt-6 divide-y divide-white/10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="py-5 first:pt-0 last:pb-0">
                  <dt className="text-sm text-white/50">{item.label}</dt>
                  <dd className="mt-1 break-words text-base font-semibold sm:text-lg">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition hover:text-[#00e676]"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[2rem] border border-[#00e676]/30 bg-[#00e676]/[0.06] p-6 sm:p-10">
            <p className={`font-[family-name:var(--f-serif)] italic text-4xl font-extrabold text-[#00e676]`}>Free audit</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              On our first call, we share a completely free SEO and conversion audit of your website.
            </p>
          </div>
        </aside>
      </section>

      {/* ───────── WHAT HAPPENS NEXT ───────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-10">
        <h2 className="font-[family-name:var(--f-head)] text-3xl font-extrabold sm:text-5xl">
          <span className={`font-[family-name:var(--f-serif)] italic text-[#00e676]`}>What happens</span> next
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {NEXT_STEPS.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
              <span className={`font-[family-name:var(--f-mono)] text-sm font-bold text-[#00e676]`}>Step {i + 1}</span>
              <h3 className="font-[family-name:var(--f-head)] mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}