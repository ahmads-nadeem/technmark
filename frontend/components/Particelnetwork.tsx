'use client';

import { useEffect, useRef } from 'react';

type Props = {
  /** "r,g,b" format — default green (#00e676) */
  color?: string;
  /** Jitna chhota number, utne zyada particles (area / density) */
  density?: number;
  /** Do particles ke darmiyan line banne ki max doori (px) */
  linkDistance?: number;
  /** Mouse ke aas-paas ka asar kitni doori tak (px) */
  mouseRadius?: number;
  className?: string;
};

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export default function ParticleNetwork({
  color = '0,230,118',
  density = 16000,
  linkDistance = 150,
  mouseRadius = 180,
  className = 'pointer-events-none fixed inset-0 -z-10',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;

    // 1) Canvas ka size set karo (retina screens ke liye dpr) aur particles banao
    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(140, Math.floor((w * h) / density)); // mobile par kam, desktop par zyada
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.2 + 0.8,
      }));
    };

    // 2) Har frame: move -> mouse ka asar -> lines -> dots
    const frame = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; // kinare se wapas
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // mouse ke paas aayen to halka sa door dhakelo
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < mouseRadius * mouseRadius && d2 > 0) {
          const d = Math.sqrt(d2);
          const push = (1 - d / mouseRadius) * 0.8;
          p.x += (dx / d) * push;
          p.y += (dy / d) * push;
        }
      }

      // particles ke darmiyan lines (jitni qareeb, utni gehri)
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDistance * linkDistance) {
            const alpha = (1 - Math.sqrt(d2) / linkDistance) * 0.12;
            ctx.strokeStyle = `rgba(${color},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // mouse tak line (cursor ke paas wale particles se)
        const mx = a.x - mouse.x;
        const my = a.y - mouse.y;
        const md2 = mx * mx + my * my;
        if (md2 < mouseRadius * mouseRadius) {
          const alpha = (1 - Math.sqrt(md2) / mouseRadius) * 0.22;
          ctx.strokeStyle = `rgba(${color},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // dots
      ctx.fillStyle = `rgba(${color},0.4)`;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion) frame_once();
      else raf = requestAnimationFrame(frame);
    };
    // reduced-motion walon ke liye sirf ek static frame
    const frame_once = () => {
      frame();
      cancelAnimationFrame(raf);
    };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onTouch = (e: TouchEvent) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onResize = () => { setup(); start(); };
    // tab chhupa ho to animation rok do (battery bachti hai)
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start());

    setup();
    start();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', onLeave);
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    // cleanup — page change par sab band
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onLeave);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [color, density, linkDistance, mouseRadius]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}