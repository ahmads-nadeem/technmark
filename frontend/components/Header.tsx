'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
// import { Plus_Jakarta_Sans } from 'next/font/google';
// import logo from '@/LogoImg.png';

const M = 'font-[family-name:var(--font-plus-jakarta)]';

const TICKER = ['Topical Authority', 'Link Building', 'Link Building', 'Technical SEO', 'Web Development', 'Google Ads', 'Meta Ads'];

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const cta = `${M} font-sans items-center justify-center rounded-full bg-[#06d66a] px-[clamp(18px,1.9vw,36px)] py-[clamp(10px,1vw,16px)] text-[clamp(15px,1.4vw,15px)] font-semibold tracking-[0.12em] text-[#04130b] transition hover:brightness-110`;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  function goHome(){
    router.push("/");
  }

  return (
    <>
      {/* Ticker */}
      <div className="overflow-hidden border-b border-[#0d2a1c] bg-[#07110d] py-3 md:py-2" aria-hidden="true">
        <style>{`
          @keyframes tm-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .tm-marquee { animation: tm-marquee 60s linear infinite; }
          @media (prefers-reduced-motion: reduce) { .tm-marquee { animation: none; } }
        `}</style>
        <div className="tm-marquee flex w-max items-center">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className={`${M} flex items-center text-[10px] uppercase tracking-[0.3em] text-white/35 md:text-[12px]`}>
              <span className="mx-5 h-[5px] w-[5px] rounded-full bg-[#00e676] md:mx-8" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className="relative">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4 px-4 py-5 md:px-[clamp(27px,3.75vw,20px)] md:py-5">
          {/* <Image src={logo} alt="logo" /> */}
          <img onClick={()=>goHome()} className='cursor-pointer w-[20%]' src="/LogoImg.png" alt="Logo" />

          <nav className="hidden items-center gap-[clamp(20px,2.4vw,56px)] xl:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className={`${M} text-[clamp(15px,1.4vw,5px)] font-bold tracking-[0.12em] transition hover:text-[#00e676] ${isActive(n.href) ? 'text-[#00e676]' : 'text-white'}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className={`${cta} hidden sm:inline-flex `}>Book a Call</Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/15 xl:hidden"
            >
              <span className={`h-[2px] w-5 bg-white transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-[2px] w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] w-5 bg-white transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        {open && (
          <nav className="border-t border-[#0d2a1c] bg-[#07110d] px-5 pb-6 pt-3 xl:hidden" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`${M} block border-b border-white/5 py-4 text-[18px] tracking-[0.12em] ${isActive(n.href) ? 'text-[#00e676]' : 'text-white'}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className={`${cta} mt-5 flex sm:hidden`}>Book a Call</Link>
          </nav>
        )}
      </header>
    </>
  );
}