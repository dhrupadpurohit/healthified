'use client';

import Link from 'next/link';
import { ABOUT_PARAS, VALUES } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Showcase } from '@/components/Showcase';

export default function AboutPage() {
  const { t, lang } = useStore();
  return (
    <main>
      <section className="wrap grid items-center gap-14 pb-11 pt-[60px] md:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="eyebrow !mb-4">{t.aboutEyebrow}</div>
          <h1 className="h-display mb-6 text-[clamp(44px,9vw,74px)] leading-[0.92] tracking-[-0.045em]">{t.aboutTitle}</h1>
          <p className="m-0 max-w-[50ch] text-[19px] leading-[1.6] text-ink/70 [text-wrap:pretty]">{t.aboutLead}</p>
        </div>
        <Showcase variant="hero" />
      </section>
      <section className="wrap pb-[88px] pt-[30px]">
        <div className="grid gap-[46px] border-y-[1.5px] border-ink/25 py-11 md:grid-cols-2">
          {ABOUT_PARAS[lang].map((p) => (
            <p key={p.text} className="m-0 text-[16.5px] leading-[1.72] text-ink/70 [text-wrap:pretty]">{p.text}</p>
          ))}
        </div>
        <div className="mt-12 grid gap-[18px] md:grid-cols-3">
          {VALUES[lang].map((v) => (
            <div key={v.title} className="rounded-3xl border border-ink/[0.16] bg-ink/[0.035] p-[30px]">
              <div className="h-display mb-3.5 text-[30px] font-semibold leading-none tracking-[-0.035em]">{v.title}</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-ink/65">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-[34px] rounded-[28px] border border-green bg-green/[0.07] p-8 md:p-[52px]">
          <div>
            <div className="h-display mb-3 text-[clamp(32px,5vw,42px)] font-semibold leading-none tracking-[-0.04em]">{t.aboutCtaTitle}</div>
            <p className="m-0 max-w-[46ch] text-[15.5px] leading-[1.6] text-ink/70">{t.aboutCtaBody}</p>
          </div>
          <Link href="/quiz/" className="btn btn-primary flex-none px-[30px] py-[17px] text-[15.5px]">{t.ctaQuiz}</Link>
        </div>
      </section>
    </main>
  );
}
