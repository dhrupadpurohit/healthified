'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PRICE, PRODUCTS, QUIZ } from '@/lib/data';
import { subUnit, useStore } from '@/lib/store';
import { asset } from '@/lib/utils';

export default function QuizPage() {
  const { t, lang, kr, addToCart } = useStore();
  const router = useRouter();
  const sv = lang === 'sv';
  const [qi, setQi] = useState(0);
  const [qa, setQa] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  const finish = () => {
    setDone(true);
    window.scrollTo({ top: 0 });
  };
  const pick = (i: number) => {
    setQa((prev) => ({ ...prev, [qi]: i }));
    if (qi < QUIZ.length - 1) setQi(qi + 1);
    else finish();
  };
  const restart = () => {
    setQi(0);
    setQa({});
    setDone(false);
  };

  const scores: Record<string, number> = {};
  QUIZ.forEach((q, i) => {
    const a = qa[i];
    if (a == null) return;
    const w = q.opts[a].w as unknown as Record<string, number>;
    Object.keys(w).forEach((k) => (scores[k] = (scores[k] || 0) + w[k]));
  });
  const ranked = PRODUCTS.slice().sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0)).slice(0, 3);

  if (done) {
    return (
      <main className="mx-auto max-w-[900px] px-7 pb-[104px] pt-14">
        <div className="mb-[42px] text-center">
          <div className="eyebrow !mb-4">{t.quizResultEyebrow}</div>
          <h1 className="h-display mx-auto mb-[18px] max-w-[22ch] text-[clamp(36px,7vw,58px)] leading-[0.96] tracking-[-0.045em]">{t.quizResultTitle}</h1>
          <p className="mx-auto max-w-[52ch] text-[17px] leading-[1.6] text-ink/70">{t.quizResultBody}</p>
        </div>
        <div className="mb-7 grid gap-4 sm:grid-cols-3">
          {ranked.map((p, i) => (
            <div key={p.id} className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-4">
              <div className="relative mb-3.5 grid aspect-square place-items-center overflow-hidden rounded-2xl bg-tile">
                <span className="absolute left-3 top-[11px] text-[10.5px] font-bold uppercase tracking-[0.1em] text-green-pale">Match {i + 1}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.img)} alt={p[lang].name} className="w-[80%]" />
              </div>
              <div className="h-display mb-1.5 text-xl font-semibold leading-[1.15] tracking-[-0.025em]">{p[lang].name}</div>
              <div className="mb-4 text-[13.5px] leading-[1.45] text-[#55655A]">{p[lang].tag}</div>
              <div className="mt-auto flex items-center justify-between gap-2.5">
                <div className="h-display text-[22px] font-semibold tracking-[-0.03em]">{kr(subUnit(PRICE))}</div>
                <button onClick={() => addToCart(p.id, true)} className="rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-green-pale">{t.add}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              ranked.forEach((p) => addToCart(p.id, true));
              router.push('/varukorg/');
            }}
            className="btn btn-primary px-7 py-4 text-[15px]"
          >
            {t.addAll}
          </button>
          <button onClick={restart} className="btn btn-outline px-7 py-4 text-[15px]">{t.restart}</button>
        </div>
      </main>
    );
  }

  const q = QUIZ[qi];
  const last = qi === QUIZ.length - 1;
  return (
    <main className="mx-auto max-w-[900px] px-7 pb-[104px] pt-14">
      <div className="mb-3 flex items-center justify-between gap-5">
        <div className="eyebrow !mb-0">{t.quizEyebrow}</div>
        <div className="text-[13.5px] font-semibold text-ink/60">{qi + 1} / {QUIZ.length}</div>
      </div>
      <div className="mb-11 h-1 overflow-hidden rounded-full bg-ink/[0.16]">
        <div className="h-full rounded-full bg-green transition-[width] duration-300" style={{ width: `${Math.round(((qi + 1) / QUIZ.length) * 100)}%` }} />
      </div>
      <h1 className="h-display mb-[34px] max-w-[24ch] text-[clamp(34px,7vw,56px)] leading-[0.98] tracking-[-0.045em]">{q[lang]}</h1>
      <div className="mb-[34px] flex flex-col gap-2.5">
        {q.opts.map((o, i) => (
          <button key={o.en} className="opt !justify-start !gap-3.5" data-on={qa[qi] === i} onClick={() => pick(i)}>
            <span className="radio" data-on={qa[qi] === i} />
            <span className="text-[17px] font-medium">{o[lang]}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setQi(Math.max(0, qi - 1))}
          className={`rounded-full border-[1.5px] border-ink/[0.24] bg-transparent px-6 py-3.5 text-[14.5px] font-semibold ${qi === 0 ? 'opacity-35' : ''}`}
        >
          ← {t.back}
        </button>
        <button
          disabled={qa[qi] == null}
          onClick={() => (last ? finish() : setQi(qi + 1))}
          className="rounded-full bg-green px-[26px] py-3.5 text-[14.5px] font-bold text-cream disabled:opacity-35"
        >
          {last ? (sv ? 'Visa resultat' : 'Show result') : sv ? 'Nästa' : 'Next'}
        </button>
      </div>
      <p className="mt-10 text-[13px] text-ink/50">
        <Link href="/produkter/" className="underline decoration-ink/30 underline-offset-2 hover:text-green">{t.navProducts}</Link>
      </p>
    </main>
  );
}
