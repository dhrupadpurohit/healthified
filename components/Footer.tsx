'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';

export function Footer() {
  const { t, a, lang, patch } = useStore();
  const sv = lang === 'sv';
  const cols = [
    {
      title: sv ? 'Handla' : 'Shop',
      links: [
        [t.navProducts, '/produkter/'],
        [t.navSub, '/#prenumeration'],
        [t.navQuiz, '/quiz/'],
        [t.cart, '/varukorg/'],
        [a.myAccount, '/konto/'],
      ],
    },
    {
      title: sv ? 'Företaget' : 'Company',
      links: [
        [t.navAbout, '/om-oss/'],
        [t.madeEyebrow, '/#tillverkning'],
        [t.navGuides, '/#guider'],
        [t.faqTitle, '/#faq'],
      ],
    },
    {
      title: sv ? 'Villkor' : 'Terms',
      links: [
        [sv ? 'Köpvillkor' : 'Terms of purchase', '#'],
        [sv ? 'Retur och återbetalning' : 'Returns and refunds', '#'],
        [sv ? 'Integritetspolicy' : 'Privacy policy', '#'],
        [sv ? 'Kontakt' : 'Contact', 'mailto:hej@healthified.se'],
      ],
    },
  ];

  return (
    <footer className="border-t border-ink/[0.12] bg-ink/[0.02]">
      <div className="wrap pb-[34px] pt-[72px]">
        <div className="grid gap-10 border-b border-ink/[0.14] pb-[46px] md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="h-display mb-4 max-w-[18ch] text-[36px] leading-none tracking-[-0.04em]">{t.footTag}</div>
            <p className="mb-[22px] max-w-[34ch] text-sm leading-[1.6] text-ink/60">{t.footBody}</p>
            <div className="flex gap-2">
              {(['sv', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => patch({ lang: l })}
                  className={`rounded-full border border-ink/[0.22] px-3.5 py-2 text-[13px] ${lang === l ? 'bg-ink/[0.14]' : ''}`}
                >
                  {l === 'sv' ? '🇸🇪 Svenska' : '🇬🇧 English'}
                </button>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-4 text-[11.5px] uppercase tracking-[0.12em] text-ink/45">{c.title}</div>
              <div className="flex flex-col gap-2.5">
                {c.links.map(([label, href]) => (
                  <Link key={label} href={href} className="text-[14.5px] text-ink/80 hover:text-green">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-5 pt-[22px] text-[12.5px] text-ink/45">
          <span>© 2026 Healthified · {t.footRights}</span>
          <span>{t.footDisclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
