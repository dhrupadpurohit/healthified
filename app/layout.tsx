import type { Metadata } from 'next';
import { DM_Sans, Familjen_Grotesk } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';

const grotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', weight: ['400', '500', '600', '700'] });
const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Healthified – Ät bra. Må bra.',
  description: 'Svensk kosttillskottsbutik med prenumeration. Tillverkat i Sverige, GMP-certifierat och tredjepartstestat.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${grotesk.variable} ${dm.variable}`}>
      <body>
        <StoreProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-0 animate-[glow_16s_ease-in-out_infinite]"
              style={{
                background:
                  'radial-gradient(900px 640px at 8% -10%, rgba(124,166,86,0.22), transparent 62%), radial-gradient(780px 580px at 94% 2%, rgba(224,138,60,0.14), transparent 64%), radial-gradient(1100px 800px at 48% 106%, rgba(124,166,86,0.16), transparent 62%)',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-0 opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(34,53,42,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,53,42,0.07) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
                maskImage: 'radial-gradient(circle at 52% 26%, #000 10%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(circle at 52% 26%, #000 10%, transparent 78%)',
              }}
            />
            <div className="relative z-[1]">
              <Header />
              {children}
              <Footer />
              <Toast />
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
