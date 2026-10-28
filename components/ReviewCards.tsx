'use client';

import { REVIEWS } from '@/lib/data';
import { useStore } from '@/lib/store';

export function ReviewCards() {
  const { lang } = useStore();
  return (
    <div className="grid gap-[18px] md:grid-cols-3">
      {REVIEWS[lang].map((r) => (
        <div key={r.name} className="flex flex-col rounded-[22px] border border-ink/[0.14] bg-ink/[0.03] p-7">
          <div className="mb-4 text-sm text-orange">★★★★★</div>
          <p className="h-display mb-5 text-[21px] font-medium leading-[1.32] tracking-[-0.02em]">{r.quote}</p>
          <div className="mt-auto flex items-center gap-[11px]">
            <div className="grid h-[34px] w-[34px] place-items-center rounded-full bg-green text-[12.5px] font-bold text-cream">{r.initials}</div>
            <div className="text-[13px] leading-[1.4]">
              <div className="font-semibold">{r.name}</div>
              <div className="text-ink/55">{r.meta}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
