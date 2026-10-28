'use client';

import { useState } from 'react';
import { CATS, PRODUCTS, type CatKey } from '@/lib/data';
import { useStore } from '@/lib/store';
import { ProductCard, SubSwitch } from '@/components/ProductCard';

export default function ShopPage() {
  const { t, lang } = useStore();
  const [cat, setCat] = useState<CatKey>('alla');
  const list = PRODUCTS.filter((p) => cat === 'alla' || p.cat === cat);

  return (
    <main className="wrap pb-24 pt-14">
      <div className="mb-[34px]">
        <div className="eyebrow">{t.shopEyebrow}</div>
        <h1 className="h-display mb-4 text-[clamp(44px,8vw,68px)] leading-[0.94] tracking-[-0.045em]">{t.shopTitle}</h1>
        <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink/70">{t.shopBody}</p>
      </div>
      <div className="mb-[26px] flex flex-wrap items-center justify-between gap-5 border-b border-ink/[0.16] pb-5">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATS[lang]) as CatKey[]).map((k) => (
            <button key={k} className="pill" data-on={cat === k} onClick={() => setCat(k)}>
              {CATS[lang][k]}
            </button>
          ))}
        </div>
        <SubSwitch />
      </div>
      <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}
