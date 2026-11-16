import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleNetwork from '@/components/Particelnetwork';
import Chatbot from '@/components/Chatbot';


const head = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--f-head' });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--f-mono' });
const serif = Playfair_Display({ subsets: ['latin'], weight: ['700', '800'], style: ['italic', 'normal'], variable: '--f-serif' });

export const metadata: Metadata = {
  title: 'TechnMark — Digital Marketing Agency',
  description: 'Pakistan’s elite digital growth agency — SEO, web development, PPC, content and email automation under one roof.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${head.variable} ${body.variable} ${mono.variable} ${serif.variable} min-h-screen overflow-x-hidden bg-[#050a08] font-[family-name:var(--f-body)] text-white antialiased`}
      >
        <ParticleNetwork/>
        <Header />
        {children}
        <Chatbot/>
        <Footer/>
      </body>
    </html>
  );
}