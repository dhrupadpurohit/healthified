'use client';

import Link from 'next/link';
import type { Product } from '@/lib/data';
import { PRICE } from '@/lib/data';
import { subUnit, useStore } from '@/lib/store';
import { asset, catLabel } from '@/lib/utils';

export function ProductCard({ p }: { p: Product }) {
  const { lang, t, showSub, kr, addToCart } = useStore();
  const l = p[lang];
  const href = `/produkter/${p.id}/`;
  return (
    <div className="flex flex-col rounded-[22px] border border-ink/10 bg-white p-4 text-ink transition-transform duration-200 hover:-translate-y-1">
      <Link href={href} className="relative mb-3.5 grid aspect-square place-items-center overflow-hidden rounded-2xl bg-tile">
        <span className="absolute left-3 top-[11px] text-[10.5px] font-bold uppercase tracking-[0.1em] text-green-pale">{catLabel(p, lang)}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(p.img)} alt={l.name} className="w-[82%]" />
      </Link>
      <div className="mb-[7px] flex items-center gap-1 text-xs text-[#7A9A2E]">
        ★★★★★ <span className="text-[#5C6B60]">({p.reviews})</span>
      </div>
      <Link href={href} className="h-display mb-1.5 text-xl font-semibold leading-[1.15] tracking-[-0.025em]">{l.name}</Link>
      <div className="mb-4 text-[13.5px] leading-[1.45] text-[#55655A]">{l.tag}</div>
      <div className="mt-auto flex items-end justify-between gap-2.5">
        <div>
          <div className="h-display text-[23px] font-semibold leading-none tracking-[-0.03em]">{kr(showSub ? subUnit(PRICE) : PRICE)}</div>
          <div className="mt-1 text-xs text-[#5C6B60]">{showSub ? t.buySub : t.buyOnce}</div>
        </div>
        <button
          onClick={() => addToCart(p.id, showSub)}
          aria-label={`${t.add} ${l.name}`}
          className="h-[38px] w-[38px] flex-none rounded-full bg-ink text-[19px] leading-none text-white hover:bg-green-pale"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function SubSwitch() {
  const { t, showSub, patch } = useStore();
  return (
    <div className="flex items-center gap-3.5">
      <span className="text-sm text-ink/70">{t.showSubPrice}</span>
      <button
        role="switch"
        aria-checked={showSub}
        aria-label={t.showSubPrice}
        className="switch"
        data-on={showSub}
        onClick={() => patch({ showSub: !showSub })}
      >
        <span />
      </button>
    </div>
  );
}
