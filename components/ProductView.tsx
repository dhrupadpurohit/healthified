'use client';

import Link from 'next/link';
import { useState } from 'react';
import { INTERVALS, PRICE, PRODUCTS, REVIEWS, SUB_DISCOUNT } from '@/lib/data';
import { subUnit, useStore } from '@/lib/store';
import { asset, catLabel } from '@/lib/utils';
import { AccordionItem } from './Accordion';

export function ProductView({ id }: { id: string }) {
  const { t, lang, kr, interval, patch, addToCart } = useStore();
  const p = PRODUCTS.find((x) => x.id === id)!;
  const l = p[lang];
  const sv = lang === 'sv';
  const [plan, setPlan] = useState<'once' | 'sub'>('sub');
  const [sec, setSec] = useState<string | null>('facts');
  const sub = plan === 'sub';

  const usps = [t.trustSweden, sv ? 'Tredjepartstestat' : 'Third-party tested', 'GMP'];
  const th = 'bg-ink/[0.08] px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-ink/75';
  const sections = [
    { key: 'facts', title: t.secFacts },
    { key: 'dose', title: t.secDose },
    { key: 'made', title: t.secMade },
  ];

  return (
    <main className="wrap pb-24 pt-[34px]">
      <Link href="/produkter/" className="inline-block pb-6 text-sm font-medium text-ink/65 hover:text-green">← {t.backToShop}</Link>
      <div className="grid items-start gap-14 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[28px] bg-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(p.img)} alt={l.name} className="relative w-[76%]" />
            <span className="absolute left-6 top-[22px] text-[11px] font-bold uppercase tracking-[0.11em] text-green-pale">{catLabel(p, lang)}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {usps.map((u) => (
              <div key={u} className="rounded-[14px] border border-ink/[0.16] px-3.5 py-[13px] text-[12.5px] font-semibold leading-[1.4] text-ink/85">{u}</div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 flex items-center gap-1 text-sm text-orange">
            ★★★★★
            <span className="ml-[7px] text-[13.5px] text-ink/55">
              {String(p.rating).replace('.', sv ? ',' : '.')} · {p.reviews} {sv ? 'omdömen' : 'reviews'}
            </span>
          </div>
          <h1 className="h-display mb-4 text-[clamp(44px,7vw,60px)] leading-[0.94] tracking-[-0.045em]">{l.name}</h1>
          <p className="mb-[30px] max-w-[50ch] text-[17.5px] leading-[1.6] text-ink/70 [text-wrap:pretty]">{l.desc}</p>

          <div className="mb-5 flex flex-col gap-2 rounded-[20px] border border-ink/[0.16] p-2">
            <button className="opt" data-on={plan === 'once'} onClick={() => setPlan('once')}>
              <span className="flex items-center gap-3">
                <span className="radio" data-on={plan === 'once'} />
                <span className="text-[15.5px] font-semibold">{t.buyOnce}</span>
              </span>
              <span className="h-display text-[21px] font-semibold tracking-[-0.03em]">{kr(PRICE)}</span>
            </button>
            <div className="opt !block" data-on={sub}>
              <button onClick={() => setPlan('sub')} className="flex w-full items-center justify-between gap-3 border-none bg-transparent p-0 text-inherit">
                <span className="flex items-center gap-3">
                  <span className="radio" data-on={sub} />
                  <span className="text-left">
                    <span className="block text-[15.5px] font-semibold">{t.buySub}</span>
                    <span className="mt-[3px] block text-[13px] text-green">{sv ? 'Spara' : 'Save'} {SUB_DISCOUNT} %</span>
                  </span>
                </span>
                <span className="text-right">
                  <span className="h-display block text-[21px] font-semibold tracking-[-0.03em]">{kr(subUnit(PRICE))}</span>
                  <span className="text-xs text-ink/45 line-through">{kr(PRICE)}</span>
                </span>
              </button>
              <div className={`grid transition-[grid-template-rows,margin] duration-[250ms] ${sub ? 'mt-3.5 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="flex flex-wrap gap-[7px] overflow-hidden">
                  {INTERVALS.map((n) => (
                    <button key={n} className="pill !px-[13px] !py-[7px] !text-[12.5px]" data-on={interval === n} onClick={() => patch({ interval: n })}>
                      {n} {sv ? 'dag' : 'days'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => addToCart(p.id, sub)} className="btn btn-primary mb-3.5 w-full p-[18px] text-base">
            {(sub ? t.buySub : t.add) + ' · ' + kr(sub ? subUnit(PRICE) : PRICE)}
          </button>
          <div className="mb-9 flex flex-wrap gap-[18px] text-[13px] text-ink/60">
            <span>{t.shipNote}</span>
            <span>{t.pauseNote}</span>
          </div>

          <div>
            {sections.map((s) => (
              <AccordionItem key={s.key} size="product" title={s.title} open={sec === s.key} onToggle={() => setSec(sec === s.key ? null : s.key)}>
                <div className="pb-5">
                  {s.key === 'facts' ? (
                    <>
                      <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr] gap-px overflow-hidden rounded-xl border border-ink/[0.14] bg-ink/[0.14]">
                        <div className={th}>{t.thSub}</div>
                        <div className={th}>{t.thAmt}</div>
                        <div className={th}>{t.thNrv}</div>
                        {p.facts.map((f) => (
                          <div key={f.name} className="contents">
                            <div className="bg-white px-3.5 py-[11px] text-sm">{f.name}</div>
                            <div className="bg-white px-3.5 py-[11px] text-sm">{f.amount}</div>
                            <div className="bg-white px-3.5 py-[11px] text-sm text-green">{f.nrv}</div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[12.5px] leading-[1.55] text-ink/50">{t.otherIng}</p>
                    </>
                  ) : (
                    <p className="m-0 max-w-[60ch] text-[15px] leading-[1.65] text-ink/70">{s.key === 'dose' ? l.dose : t.madeText}</p>
                  )}
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[88px]">
        <h2 className="h-display mb-6 text-[clamp(30px,5vw,42px)] font-semibold tracking-[-0.04em]">{t.pdRevTitle}</h2>
        <div className="grid gap-[18px] md:grid-cols-3">
          {REVIEWS[lang].map((r) => (
            <div key={r.name} className="rounded-[20px] border border-ink/[0.14] bg-ink/[0.03] p-6">
              <div className="mb-3 text-[13px] text-orange">★★★★★</div>
              <p className="mb-4 text-[15.5px] leading-[1.6]">{r.quote}</p>
              <div className="text-[13px] text-ink/55">{r.name} · {r.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
