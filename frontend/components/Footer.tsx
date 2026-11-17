import Link from 'next/link';
import Logo from '@/components/Logo';

const M = 'font-[family-name:var(--f-sans)]';
const linkCls = `${M} inline-block py-1 text-[clamp(14px,1.275vw,20px)] mb-0 tracking-[0.15em] text-white/50 transition hover:text-[#00e676]`;
const headCls = `${M} text-[clamp(14px,1.375vw,22px)] font-bold uppercase tracking-[0.3em]`;

const SERVICES = [
  { label: 'SEO Services', href: '/services' },
  { label: 'Web Development', href: '/services' },
  { label: 'Social Media', href: '/services' },
  { label: 'PPC & Ads', href: '/services' },
  { label: 'Content Marketing', href: '/services' },
  { label: 'Email Marketing', href: '/services' },
];

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  // { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const SOCIALS = [
  { label: 'X', text: 'X' },
  { label: 'LinkedIn', text: 'in' },
  { label: 'Facebook', text: 'f' },
  { label: 'YouTube', text: '▶' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#0d2a1c] bg-[#08100c]">
      <svg className="pointer-events-none absolute left-1/2 top-12 h-auto w-[260px] -translate-x-1/2 opacity-[0.07] sm:w-[400px]" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,3 92,27 92,73 50,97 8,73 8,27" fill="#00e676" />
      </svg>

      <div className="relative mx-auto grid max-w-[1920px] gap-12 px-5 py-12 md:py-20 sm:grid-cols-2 md:px-[clamp(24px,3.75vw,60px)] lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo small />
          <p className="mt-8 max-w-[420px] text-[clamp(14px,1.375vw,22px)] leading-[1.7] text-white/55">
            Technology + Marketing. Pakistan&rsquo;s most results-driven digital growth agency — SEO, web development, CRO, and paid media under one roof.
          </p>
          <div className="mt-8 flex gap-4">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="flex h-[clamp(40px,3.875vw,62px)] w-[clamp(40px,3.875vw,62px)] items-center justify-center rounded-xl border border-white/10 bg-[#0b1511] text-[clamp(14px,1.375vw,22px)] font-bold text-white/85 transition hover:border-[#00e676]">
                {s.text}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className={headCls}>Services</h4>
          <ul className="mt-8 space-y-2">
            {SERVICES.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={headCls}>Company</h4>
          <ul className="mt-8 space-y-2">
            {COMPANY.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className={headCls}>Contact</h4>
          <ul className={`${M} mt-8 space-y-4 text-[clamp(14px,1.375vw,22px)] tracking-[0.12em] text-white/50`}>
            <li className="flex items-start gap-4"><span className="text-[#00e676]">⌖</span><span className="min-w-0 break-words">Faisalabad, Punjab, Pakistan</span></li>
            <li className="flex items-start gap-4"><span className="text-[#00e676]">✆</span><a href="tel:+923417910534" className="min-w-0 break-words">+92 341 7910534</a></li>
            <li className="flex items-start gap-4"><span className="text-[#00e676]">✉</span><a href="mailto:hello@technmark.com" className="min-w-0 break-words">hello@technmark.com</a></li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1920px] flex-wrap items-center justify-center gap-4 border-t border-white/10 px-5 py-4 text-center sm:justify-between sm:text-left md:px-[clamp(24px,3.75vw,60px)]">
        <p className="text-[clamp(14px,1vw,17px)] text-white/35">© {new Date().getFullYear()} TechnMark Digital Marketing Agency. All rights reserved.</p>
        <span className={`${M} rounded-full border border-[#0f4a2c] bg-[#0b2a1b] px-6 py-1 text-[13px] text-[#00e676] md:mr-12`}>PK Proudly Pakistani</span>
      </div>
    </footer>
  );
}