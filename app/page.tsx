'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BUNDLES, FAQS, GUIDES, INTERVALS, PILLARS, PRODUCTS, SUBSTEPS } from '@/lib/data';
import { useStore } from '@/lib/store';
import { asset } from '@/lib/utils';
import { Showcase } from '@/components/Showcase';
import { ProductCard, SubSwitch } from '@/components/ProductCard';
import { AccordionItem } from '@/components/Accordion';
import { ReviewCards } from '@/components/ReviewCards';

const band = 'border-y border-ink/10 bg-ink/[0.02]';
const h2xl = 'h-display text-[clamp(38px,6vw,56px)] leading-[0.98] tracking-[-0.04em]';
const h2lg = 'h-display text-[clamp(34px,5vw,50px)] leading-none tracking-[-0.04em]';

export default function Home() {
  const { t, lang, kr, interval, patch, addToCart } = useStore();
  const [faq, setFaq] = useState<number | null>(null);
  const sv = lang === 'sv';

  return (
    <main id="top">
      {/* Hero */}
      <section className="wrap grid items-center gap-[52px] pb-12 pt-12 md:grid-cols-[1.02fr_0.98fr] md:pt-[72px]">
        <div>
          <h1 className="h-display mb-6 text-[clamp(52px,11vw,86px)] leading-[0.9] tracking-[-0.045em] [text-wrap:balance]">
            {t.heroA}
            <br />
            <span className="text-green">{t.heroB}</span>
          </h1>
          <p className="mb-[34px] max-w-[46ch] text-[18.5px] leading-[1.62] text-ink/70 [text-wrap:pretty]">{t.heroBody}</p>
          <div className="mb-[42px] flex flex-wrap gap-3">
            <Link href="/produkter/" className="btn btn-primary px-8 py-[17px] text-[15.5px]">{t.ctaShop}</Link>
            <Link href="/quiz/" className="btn btn-outline px-8 py-[17px] text-[15.5px]">{t.ctaQuiz}</Link>
          </div>
          <div className="flex flex-wrap items-center gap-[26px]">
            <div className="flex flex-col gap-[3px]">
              <div className="text-[15px] tracking-[2px] text-orange">★★★★★</div>
              <div className="text-[13.5px] text-ink/60">{t.rating}</div>
            </div>
            <div className="h-[34px] w-px bg-ink/[0.18]" />
            <div className="text-[13.5px] leading-[1.5] text-ink/60">
              {t.trustSweden}
              <br />
              {t.trustGmp}
            </div>
          </div>
        </div>

        <div className="relative">
          <Showcase variant="hero" width="w-[84%]" float radius="rounded-[32px]" className="border border-ink/[0.14]" />
          <div className="absolute right-2.5 top-[22px] flex flex-col items-center gap-[9px] rounded-[20px] border border-ink/[0.16] bg-cream px-4 pb-[13px] pt-3.5 shadow-[0_14px_30px_-18px_rgba(34,53,42,0.4)]">
            <div className="relative h-[25px] w-10 overflow-hidden rounded-[3px] bg-[#005293]">
              <div className="absolute inset-x-0 top-2.5 h-[5px] bg-[#FECB00]" />
              <div className="absolute inset-y-0 left-3 w-[5px] bg-[#FECB00]" />
            </div>
            <div className="whitespace-nowrap text-center text-[10px] font-bold uppercase leading-[1.35] tracking-[0.11em]">{t.badgeMade}</div>
          </div>
        </div>
      </section>

      {/* Pelare */}
      <section className="wrap pb-[76px] pt-6">
        <div className="grid gap-px overflow-hidden rounded-[22px] border border-ink/[0.12] bg-ink/[0.12] sm:grid-cols-2 md:grid-cols-4">
          {PILLARS[lang].map((p) => (
            <div key={p.num} className="bg-[#F6F4EC] px-6 py-[26px]">
              <div className="h-display mb-3 text-xl font-semibold tracking-[-0.02em] text-green">{p.num}</div>
              <div className="mb-1.5 text-[15.5px] font-semibold">{p.title}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink/60">{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Produkter */}
      <section id="produkter" className={`${band} scroll-mt-[70px]`}>
        <div className="wrap py-[76px]">
          <div className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]">
            <div>
              <div className="eyebrow">{t.prodEyebrow}</div>
              <h2 className={h2xl}>{t.prodTitle}</h2>
            </div>
            <SubSwitch />
          </div>
          <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.slice(0, 3).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
            <div className="flex flex-col justify-between rounded-[22px] border border-ink/[0.16] bg-ink/[0.04] p-[26px]">
              <div>
                <div className="h-display mb-3.5 text-[34px] font-semibold leading-none tracking-[-0.04em]">{t.quizCardTitle}</div>
                <p className="m-0 text-sm leading-[1.6] text-ink/70">{t.quizCardBody}</p>
              </div>
              <Link href="/quiz/" className="btn btn-primary mt-[22px] self-start px-[22px] py-3.5 text-[14.5px]">{t.quizCardCta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prenumeration */}
      <section id="prenumeration" className="wrap scroll-mt-[70px] py-[88px]">
        <div className="grid items-center gap-14 md:grid-cols-[0.88fr_1.12fr]">
          <div className="relative">
            <Showcase variant="sub" width="w-[88%]" ratio="aspect-[4/5]" />
            <div className="absolute -bottom-[18px] right-0 max-w-[210px] rounded-[20px] border border-ink/20 bg-cream px-[22px] py-[18px] md:-right-[18px]">
              <div className="h-display mb-[7px] text-[30px] font-semibold leading-none tracking-[-0.04em] text-green">{t.subStatNum}</div>
              <div className="text-[12.5px] leading-[1.45] text-ink/75">{t.subStatLabel}</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">{t.subEyebrow}</div>
            <h2 className={`${h2xl} mb-5`}>{t.subTitle}</h2>
            <p className="mb-8 max-w-[52ch] text-[17px] leading-[1.65] text-ink/70 [text-wrap:pretty]">{t.subBody}</p>
            <div className="mb-[30px] flex flex-col gap-px overflow-hidden rounded-[18px] border border-ink/[0.12] bg-ink/[0.12]">
              {SUBSTEPS[lang].map((s) => (
                <div key={s.n} className="flex items-start gap-4 bg-white px-[22px] py-[18px]">
                  <div className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-green text-[12.5px] font-bold text-cream">{s.n}</div>
                  <div>
                    <div className="mb-1 text-[15.5px] font-semibold">{s.title}</div>
                    <div className="text-sm leading-[1.55] text-ink/65">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-ink/70">{t.intervalLabel}</span>
              {INTERVALS.map((n) => (
                <button key={n} className="pill" data-on={interval === n} onClick={() => patch({ interval: n })}>
                  {n} {sv ? 'dag' : 'days'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kurer */}
      <section className={band}>
        <div className="wrap py-20">
          <div className="mb-[34px] flex flex-wrap items-end justify-between gap-6">
            <h2 className={h2lg}>{t.bundleTitle}</h2>
            <p className="m-0 max-w-[40ch] text-[15.5px] leading-[1.6] text-ink/60">{t.bundleBody}</p>
          </div>
          <div className="grid gap-[18px] md:grid-cols-3">
            {BUNDLES.map((b) => {
              const l = b[lang];
              return (
                <div key={b.id} className="flex flex-col rounded-3xl border border-ink/[0.16] bg-ink/[0.035] p-[26px] hover:border-green">
                  <div className="mb-4 flex flex-col items-start gap-3">
                    <span className="rounded-full bg-green px-2.5 py-[5px] text-[10.5px] font-bold uppercase tracking-[0.09em] text-cream">{l.tagline}</span>
                    <div className="h-display text-[30px] font-semibold leading-[1.02] tracking-[-0.035em]">{l.name}</div>
                  </div>
                  <p className="mb-[18px] text-[14.5px] leading-[1.6] text-ink/65">{l.body}</p>
                  <div className="mb-[22px] flex gap-2">
                    {b.ids.map((id) => {
                      const p = PRODUCTS.find((x) => x.id === id)!;
                      return (
                        <div key={id} className="grid flex-1 aspect-square place-items-center overflow-hidden rounded-xl bg-tile">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={asset(p.img)} alt={p[lang].name} className="w-[84%]" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-auto flex flex-col gap-3.5">
                    <div className="flex flex-wrap items-baseline gap-[9px]">
                      <span className="h-display whitespace-nowrap text-[25px] font-semibold leading-none tracking-[-0.03em]">
                        {kr(b.price)}
                        {sv ? '/mån' : '/mo'}
                      </span>
                      <span className="whitespace-nowrap text-xs text-ink/45 line-through">{kr(b.was)}</span>
                    </div>
                    <button onClick={() => addToCart(b.id, true)} className="btn btn-dark w-full whitespace-nowrap px-5 py-[13px] text-sm">
                      {t.addBundle}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tillverkning */}
      <section id="tillverkning" className="wrap scroll-mt-[70px] py-[88px]">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="eyebrow">{t.madeEyebrow}</div>
            <h2 className={`${h2xl} mb-5`}>{t.madeTitle}</h2>
            <p className="mb-8 max-w-[54ch] text-[17px] leading-[1.65] text-ink/70 [text-wrap:pretty]">{t.madeBody}</p>
            <div className="grid gap-5 sm:grid-cols-3">
              {PILLARS[lang].slice(0, 3).map((f) => (
                <div key={f.num} className="border-t-[1.5px] border-green pt-3.5">
                  <div className="h-display mb-2 text-[19px] font-semibold leading-[1.15] tracking-[-0.025em]">{f.title}</div>
                  <div className="text-[13.5px] leading-[1.5] text-ink/60">{f.body}</div>
                </div>
              ))}
            </div>
          </div>
          <Showcase variant="made" width="w-[86%]" />
        </div>
      </section>

      {/* Omdömen */}
      <section className={band}>
        <div className="wrap py-[78px]">
          <div className="mb-[34px] flex flex-wrap items-end justify-between gap-6">
            <h2 className={h2lg}>{t.revTitle}</h2>
            <div className="flex items-center gap-3.5">
              <div className="h-display text-[46px] font-semibold leading-none tracking-[-0.04em] text-green">{sv ? '4,8' : '4.8'}</div>
              <div className="text-[13.5px] leading-[1.5] text-ink/60">
                <span className="text-orange">★★★★★</span>
                <br />
                {t.revCount}
              </div>
            </div>
          </div>
          <ReviewCards />
        </div>
      </section>

      {/* Guider */}
      <section id="guider" className="wrap scroll-mt-[70px] py-[88px]">
        <div className="mb-[34px]">
          <div className="eyebrow">{t.guideEyebrow}</div>
          <h2 className={h2lg}>{t.guideTitle}</h2>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          {GUIDES[lang].map((g) => (
            <Link key={g.id} href={`/guider/${g.id}/`} className="block border-t-[1.5px] border-ink/30 pt-[18px] text-ink hover:border-green">
              <div className="mb-3.5 flex items-center gap-3 text-[11.5px] uppercase tracking-[0.09em] text-ink/50">
                <span className="font-bold text-green">{g.tag}</span>
                <span>{g.read}</span>
              </div>
              <h3 className="h-display mb-3 text-[27px] font-semibold leading-[1.1] tracking-[-0.03em]">{g.title}</h3>
              <p className="mb-4 text-[14.5px] leading-[1.6] text-ink/65">{g.body}</p>
              <span className="border-b-[1.5px] border-green pb-0.5 text-sm font-semibold text-green">{t.readMore}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-[70px] border-t border-ink/10 bg-ink/[0.02]">
        <div className="wrap grid gap-14 py-[78px] md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className={`${h2lg} mb-[18px]`}>{t.faqTitle}</h2>
            <p className="mb-[22px] text-[15.5px] leading-[1.6] text-ink/65">{t.faqBody}</p>
            <a href="mailto:hej@healthified.se" className="border-b-[1.5px] border-green pb-0.5 text-[15px] font-semibold">hej@healthified.se</a>
          </div>
          <div>
            {FAQS[lang].map((f, i) => (
              <AccordionItem key={f.q} title={f.q} open={faq === i} onToggle={() => setFaq(faq === i ? null : i)}>
                <p className="m-0 max-w-[62ch] pb-5 text-[15px] leading-[1.65] text-ink/70">{f.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
