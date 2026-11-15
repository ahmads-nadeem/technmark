import Link from 'next/link';

export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2 md:gap-3" aria-label="TechnMark home">
      {/* <svg
        viewBox="0 0 100 100"
        className={small ? 'h-14 w-14 md:h-[70px] md:w-[70px]' : 'h-5 w-10 md:h-[72px] md:w-[72px] xl:h-[92px] xl:w-[92px]'}
      >
        <polygon points="50,3 92,27 92,73 50,97 8,73 8,27" fill="#00c853" />
        <text x="50" y="62" textAnchor="middle" fontSize="38" fontWeight="800" fill="#fff" fontStyle="italic" fontFamily="sans-serif">TM</text>
        <path d="M60 30l14-8v12" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg> */}
      <div className="leading-none">
        <div
          className={`font-[family-name:var(--f-head)] font-bold tracking-tight text-white ${
            small ? 'text-[28px] md:text-[34px]' : 'text-[26px] md:text-[34px] xl:text-[46px]'
          }`}
        >
          Techn<span className="text-[#00e676]">Mark</span>
        </div>
        <div className="mt-1 border-t border-white/70 pt-1 font-[family-name:var(--f-mono)] text-[7px] font-bold uppercase tracking-[0.3em] text-white md:text-[10px]">
          Digital Marketing Agency
        </div>
      </div>
    </Link>
  );
}