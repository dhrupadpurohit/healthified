'use client';

import Link from 'next/link';
import { GUIDES, PRODUCTS } from '@/lib/data';
import { useStore } from '@/lib/store';
import { asset } from '@/lib/utils';

export function GuideView({ id }: { id: string }) {
  const { t, lang } = useStore();
  const list = GUIDES[lang];
  const g = list.find((x) => x.id === id)!;
  const rel = PRODUCTS.find((p) => p.id === g.rel)!;
  const others = list.filter((x) => x.id !== g.id);

  return (
    <main>
      <article className="mx-auto max-w-[760px] px-7 pb-6 pt-[34px]">
        <Link href="/#guider" className="inline-block pb-[26px] text-sm font-medium text-ink/65 hover:text-green">← {t.backGuides}</Link>
        <div className="mb-[18px] flex items-center gap-3 text-[11.5px] uppercase tracking-[0.09em] text-ink/50">
          <span className="font-bold text-green">{g.tag}</span>
          <span>{g.read}</span>
        </div>
        <h1 className="h-display mb-6 text-[clamp(36px,7vw,54px)] leading-[1.02] tracking-[-0.045em] [text-wrap:balance]">{g.title}</h1>
        <p className="mb-10 text-xl leading-[1.55] text-ink/80 [text-wrap:pretty]">{g.lead}</p>

        {g.sections.map((s) => (
          <section key={s.h} className="mb-[38px]">
            <h2 className="h-display mb-3.5 text-[27px] font-semibold leading-[1.15] tracking-[-0.03em]">{s.h}</h2>
            {s.paras.map((p) => (
              <p key={p} className="mb-4 text-[16.5px] leading-[1.7] text-ink/70 [text-wrap:pretty]">{p}</p>
            ))}
          </section>
        ))}

        <div className="mb-5 rounded-[20px] border border-ink/[0.16] bg-ink/[0.03] px-7 py-[26px]">
          <div className="kicker !text-green mb-4">{g.takeTitle}</div>
          <div className="grid gap-[11px]">
            {g.takes.map((k) => (
              <div key={k} className="flex items-start gap-[11px] text-[15.5px] leading-[1.5] text-ink/80">
                <span className="mt-2 block h-1.5 w-1.5 flex-none rounded-full bg-green" />
                {k}
              </div>
            ))}
          </div>
        </div>
        <p className="m-0 text-[12.5px] leading-[1.6] text-ink/50">{t.guideDisc}</p>
      </article>

      <section className="mx-auto max-w-[760px] px-7 pt-[26px]">
        <div className="kicker mb-3.5">{t.guideRelTitle}</div>
        <Link href={`/produkter/${rel.id}/`} className="flex items-center gap-[22px] rounded-[22px] border border-ink/[0.14] bg-white px-[22px] py-[18px] hover:border-green">
          <div className="flex h-[92px] w-[92px] flex-none items-center justify-center overflow-hidden rounded-2xl bg-sand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(rel.img)} alt={rel[lang].name} className="h-full w-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex-1">
            <div className="h-display mb-[5px] text-2xl font-semibold tracking-[-0.03em]">{rel[lang].name}</div>
            <div className="text-[14.5px] leading-[1.5] text-ink/65">{rel[lang].tag}</div>
          </div>
          <span className="flex-none text-[22px] text-green">→</span>
        </Link>
      </section>

      <section className="mx-auto max-w-[760px] px-7 pb-24 pt-[54px]">
        <div className="kicker mb-[18px]">{t.guideMore}</div>
        <div className="grid gap-5 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.id} href={`/guider/${o.id}/`} className="block border-t-[1.5px] border-ink/30 pt-4 hover:border-green">
              <div className="mb-2.5 flex gap-2.5 text-[11px] uppercase tracking-[0.09em] text-ink/50">
                <span className="font-bold text-green">{o.tag}</span>
                <span>{o.read}</span>
              </div>
              <h3 className="h-display m-0 text-[21px] font-semibold leading-[1.15] tracking-[-0.03em]">{o.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
