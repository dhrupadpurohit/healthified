'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FREE_SHIPPING_FROM, SHIPPING_FEE } from '@/lib/data';
import { itemInfo, subUnit, useStore } from '@/lib/store';
import { asset } from '@/lib/utils';

const input = 'rounded-xl border border-ink/20 bg-ink/5 px-4 py-3.5 text-[15px] text-ink outline-none focus:border-green';

export default function CartPage() {
  const { t, lang, cart, setQty, removeLine, clearCart, kr, flash } = useStore();
  const sv = lang === 'sv';
  const [pay, setPay] = useState('klarna');

  let subtotal = 0;
  let discount = 0;
  const lines = cart.map((l) => {
    const it = itemInfo(l.id, lang);
    const unit = l.sub ? subUnit(it.price) : it.price;
    subtotal += it.price * l.qty;
    discount += (it.price - unit) * l.qty;
    return { l, it, unit };
  });
  const goods = subtotal - discount;
  const ship = goods === 0 || goods >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE;
  const remaining = Math.max(0, FREE_SHIPPING_FROM - goods);

  const payments = [
    { key: 'klarna', label: 'Klarna', note: sv ? 'Faktura eller delbetalning' : 'Invoice or instalments' },
    { key: 'card', label: sv ? 'Kort' : 'Card', note: 'Visa · Mastercard' },
    { key: 'swish', label: 'Swish', note: sv ? 'Betala i appen' : 'Pay in the app' },
  ];

  return (
    <main className="wrap pb-[104px] pt-12">
      <h1 className="h-display mb-8 text-[clamp(42px,8vw,62px)] leading-[0.96] tracking-[-0.045em]">{t.cartTitle}</h1>

      {cart.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-ink/30 px-[30px] py-[72px] text-center">
          <p className="mb-6 text-lg text-ink/70">{t.cartEmpty}</p>
          <Link href="/produkter/" className="btn btn-primary inline-block px-7 py-[15px] text-[15px]">{t.ctaShop}</Link>
        </div>
      ) : (
        <div className="grid items-start gap-10 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="mb-2 rounded-2xl border border-ink/[0.14] bg-white px-5 py-4">
              <div className="mb-2.5 text-sm font-medium">
                {remaining === 0
                  ? sv ? 'Du har fri frakt!' : 'You have free shipping!'
                  : sv ? `${kr(remaining)} kvar till fri frakt` : `${kr(remaining)} left for free shipping`}
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-ink/[0.12]">
                <div className="h-full rounded-full bg-green transition-[width] duration-300" style={{ width: `${Math.min(100, (goods / FREE_SHIPPING_FROM) * 100)}%` }} />
              </div>
            </div>

            {lines.map(({ l, it, unit }) => (
              <div key={l.key} className="flex flex-wrap items-center gap-[18px] border-b border-ink/[0.14] py-5 sm:flex-nowrap">
                <div className="grid h-[88px] w-[88px] flex-none place-items-center overflow-hidden rounded-2xl bg-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(it.img)} alt="" className="w-4/5" />
                </div>
                <div className="min-w-[140px] flex-1">
                  <div className="h-display mb-[5px] text-[19px] font-semibold tracking-[-0.025em]">{it.name}</div>
                  <div className="text-[13.5px] text-ink/60">
                    {l.sub ? `${t.buySub} · ${t.intervalLabel} ${l.interval} ${sv ? 'dag' : 'days'}` : t.buyOnce}
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-ink/20 p-1">
                  <button aria-label="−" onClick={() => setQty(l.key, l.qty - 1)} className="h-7 w-7 rounded-full text-base hover:bg-ink/[0.12]">−</button>
                  <span className="min-w-5 text-center text-[14.5px] font-semibold">{l.qty}</span>
                  <button aria-label="+" onClick={() => setQty(l.key, l.qty + 1)} className="h-7 w-7 rounded-full text-base hover:bg-ink/[0.12]">+</button>
                </div>
                <div className="h-display min-w-24 text-right text-[21px] font-semibold tracking-[-0.03em]">{kr(unit * l.qty)}</div>
                <button aria-label={sv ? 'Ta bort' : 'Remove'} onClick={() => removeLine(l.key)} className="p-1 text-lg text-ink/45 hover:text-green">×</button>
              </div>
            ))}

            <div className="mt-9">
              <h2 className="h-display mb-[18px] text-[34px] font-semibold tracking-[-0.035em]">{t.checkoutTitle}</h2>
              <div className="grid grid-cols-2 gap-3">
                <input className={`${input} col-span-2`} placeholder={t.fName} autoComplete="name" />
                <input className={`${input} max-sm:col-span-2`} placeholder={t.fEmail} type="email" autoComplete="email" />
                <input className={`${input} max-sm:col-span-2`} placeholder={t.fPhone} type="tel" autoComplete="tel" />
                <input className={`${input} col-span-2`} placeholder={t.fAddr} autoComplete="street-address" />
                <input className={input} placeholder={t.fZip} autoComplete="postal-code" />
                <input className={input} placeholder={t.fCity} autoComplete="address-level2" />
              </div>
              <div className="mt-[18px] flex flex-col gap-2">
                {payments.map((p) => (
                  <button key={p.key} className="opt" data-on={pay === p.key} onClick={() => setPay(p.key)}>
                    <span className="flex items-center gap-3">
                      <span className="radio" data-on={pay === p.key} />
                      <span className="text-[15.5px] font-semibold">{p.label}</span>
                    </span>
                    <span className="text-[13px] text-ink/55">{p.note}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-ink/[0.16] bg-ink/[0.04] p-7 md:sticky md:top-24">
            <div className="mb-[18px] text-xs uppercase tracking-[0.12em] text-ink/60">{t.summary}</div>
            <div className="flex flex-col gap-[11px] border-b border-ink/[0.16] pb-4 text-[14.5px]">
              <div className="flex justify-between"><span className="text-ink/70">{t.subtotal}</span><span className="font-semibold">{kr(subtotal)}</span></div>
              <div className="flex justify-between text-green"><span>{t.subDiscount}</span><span className="font-semibold">{discount ? '−' + kr(discount) : kr(0)}</span></div>
              <div className="flex justify-between"><span className="text-ink/70">{t.shipping}</span><span className="font-semibold">{ship === 0 ? t.free : kr(ship)}</span></div>
            </div>
            <div className="flex items-baseline justify-between pb-1 pt-4">
              <span className="text-[15px] font-semibold">{t.total}</span>
              <span className="h-display text-[34px] font-semibold tracking-[-0.04em]">{kr(goods + ship)}</span>
            </div>
            <p className="mb-[18px] mt-1.5 text-[12.5px] leading-[1.55] text-ink/50">{t.vatNote}</p>
            <button
              onClick={() => {
                flash(t.toastOrder);
                clearCart();
              }}
              className="btn btn-primary w-full p-[17px] text-[15.5px]"
            >
              {t.placeOrder}
            </button>
            <div className="mt-4 flex flex-col gap-2 text-[12.5px] text-ink/60">
              <span>{t.trustSweden}</span>
              <span>{t.pauseNote}</span>
              <span>{t.trustReturn}</span>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
