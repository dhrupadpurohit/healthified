'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import { Logo } from './Logo';

function Ticker() {
  const { t } = useStore();
  const row = (
    <div className="flex gap-[46px] px-6 py-2.5">
      {[t.tick1, t.tick2, t.tick3, t.tick4].map((x) => (
        <span key={x} className="flex gap-[46px]">
          <span>{x}</span>
          <span className="text-green">✳</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-ink/10 text-[12.5px] uppercase tracking-[0.09em] text-ink/60">
      <div className="flex w-max animate-[marquee_36s_linear_infinite]">
        {row}
        {row}
      </div>
    </div>
  );
}

const navLink =
  'whitespace-nowrap border-b-[1.5px] border-transparent py-1.5 text-[14.5px] font-medium text-ink hover:border-green hover:text-green';

export function Header() {
  const { t, a, lang, patch, cartCount, authed, menuOpen, setMenuOpen } = useStore();
  const close = () => setMenuOpen(false);

  return (
    <>
      <Ticker />
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur-[16px]">
        <div className="wrap flex items-center gap-3 py-3.5 md:gap-7">
          <Link href="/" className="block flex-none" onClick={close}>
            <Logo />
          </Link>

          <nav className="ml-2 hidden flex-1 items-center gap-4 md:flex xl:gap-[26px]">
            <Link href="/produkter/" className={navLink}>{t.navProducts}</Link>
            <Link href="/#prenumeration" className={navLink}>{t.navSub}</Link>
            <Link href="/quiz/" className="whitespace-nowrap rounded-full bg-green px-3.5 py-[7px] text-[14.5px] font-semibold text-cream hover:bg-ink">
              {t.navQuiz}
            </Link>
            <Link href="/#guider" className={navLink + ' max-lg:hidden'}>{t.navGuides}</Link>
            <Link href="/om-oss/" className={navLink + ' max-lg:hidden'}>{t.navAbout}</Link>
          </nav>

          <div className="ml-auto flex items-center gap-[5px] rounded-full bg-ink/[0.08] p-1 md:ml-0">
            {(['sv', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => patch({ lang: l })}
                title={l === 'sv' ? 'Svenska' : 'English'}
                className={`h-[26px] w-[30px] rounded-full text-sm leading-none ${
                  lang === l ? 'bg-white shadow-[0_1px_4px_rgba(34,53,42,0.18)]' : 'opacity-45'
                }`}
              >
                {l === 'sv' ? '🇸🇪' : '🇬🇧'}
              </button>
            ))}
          </div>

          <Link
            href="/konto/"
            onClick={close}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-ink/[0.18] px-[15px] py-[9px] text-sm font-semibold hover:border-green hover:text-green md:flex"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-green/[0.16] text-[11px] font-bold text-green">●</span>
            {authed ? 'Elin' : a.login}
          </Link>

          <Link
            href="/varukorg/"
            onClick={close}
            className="flex items-center gap-[9px] whitespace-nowrap rounded-full border border-ink/[0.18] bg-ink/[0.08] px-4 py-[9px] text-sm font-semibold hover:bg-ink/[0.16]"
          >
            <span className="max-md:hidden">{t.cart}</span>
            <span className="grid h-[21px] min-w-[21px] place-items-center rounded-full bg-green text-xs font-bold text-cream">{cartCount}</span>
          </Link>

          <button
            aria-label="Meny"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-[38px] w-[38px] flex-none place-items-center rounded-full border border-ink/[0.18] md:hidden"
          >
            <span className="grid gap-[5px]">
              <span className={`block h-[1.5px] w-4 bg-ink transition-transform ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] w-4 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] w-4 bg-ink transition-transform ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav className="wrap grid gap-1 border-t border-ink/10 pb-5 pt-3 md:hidden">
            {[
              ['/produkter/', t.navProducts],
              ['/#prenumeration', t.navSub],
              ['/quiz/', t.navQuiz],
              ['/#guider', t.navGuides],
              ['/om-oss/', t.navAbout],
              ['/konto/', authed ? a.myAccount : a.login],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={close} className="py-2.5 text-[17px] font-medium">
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
