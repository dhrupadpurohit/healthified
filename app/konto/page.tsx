'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { INTERVALS, ORDERS, PRICE, PRODUCTS, SUB_FACTOR } from '@/lib/data';
import { subUnit, useStore } from '@/lib/store';
import { asset } from '@/lib/utils';

type Tab = 'overview' | 'sub' | 'orders' | 'settings';

const label = 'mb-3 text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink/50';
const accBtn = 'rounded-full border-[1.5px] px-5 py-3 text-sm font-semibold whitespace-nowrap';
const solid = `${accBtn} border-green bg-green text-cream hover:border-ink hover:bg-ink`;
const ghost = `${accBtn} border-ink/[0.24] bg-transparent text-ink hover:border-green hover:text-green`;
const plain = 'border-none bg-transparent px-0 py-3 text-sm font-semibold text-ink/60 hover:text-orange';

export default function AccountPage() {
  const { authed, patch } = useStore();
  return authed ? <Account /> : <Login onLogin={() => patch({ authed: true })} />;
}

function Login({ onLogin }: { onLogin: () => void }) {
  const { a } = useStore();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const bullet = 'flex items-center gap-[11px] text-[15px] text-ink/75';
  const dot = <span className="block h-1.5 w-1.5 flex-none rounded-full bg-green" />;

  return (
    <main className="wrap grid items-center gap-[38px] pb-[90px] pt-12 md:grid-cols-[1fr_0.85fr] md:gap-16 md:pb-[110px] md:pt-[72px]">
      <div>
        <h1 className="h-display mb-[18px] text-[clamp(36px,6vw,52px)] leading-[1.03] tracking-[-0.045em] [text-wrap:balance]">{a.loginTitle}</h1>
        <p className="mb-8 max-w-[44ch] text-lg leading-[1.6] text-ink/70">{a.loginLead}</p>
        <div className="grid max-w-[40ch] gap-3">
          <div className={bullet}>{dot}{a.skipNext} · {a.pause} · {a.changeInterval}</div>
          <div className={bullet}>{dot}{a.ordersTitle}</div>
          <div className={bullet}>{dot}{a.settingsTitle}</div>
        </div>
      </div>
      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
          window.scrollTo({ top: 0 });
        }}
      >
        <div className="h-display mb-[22px] text-[26px] font-semibold tracking-[-0.03em]">{a.login}</div>
        <label htmlFor="email" className="mb-[7px] block text-[13px] font-semibold text-ink/65">{a.email}</label>
        <input id="email" type="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="elin.sandberg@mail.se" />
        <label htmlFor="pass" className="mb-[7px] mt-[18px] block text-[13px] font-semibold text-ink/65">{a.pass}</label>
        <input id="pass" type="password" className="field" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••" />
        <button type="submit" className="btn btn-primary mt-6 w-full p-4 text-[15.5px]">{a.login}</button>
        <div className="mt-[18px] flex items-center justify-between text-sm">
          <Link href="#" className="text-ink/60">{a.forgot}</Link>
          <Link href="#" className="font-semibold text-green hover:text-orange">{a.createAcct}</Link>
        </div>
        <div className="mt-[22px] border-t border-ink/[0.12] pt-[18px] text-[12.5px] text-ink/50">{a.demoNote}</div>
      </form>
    </main>
  );
}

function Account() {
  const s = useStore();
  const { a, lang, kr, patch, flash, fmtDate, fmtFull, addToCart, subItems, subPaused, subSkipped, subInterval, notif } = s;
  const router = useRouter();
  const sv = lang === 'sv';
  const [tab, setTab] = useState<Tab>('overview');

  const today = new Date(2026, 7, 13);
  const next = new Date(2026, 7, 27);
  if (subSkipped) next.setDate(next.getDate() + subInterval);
  const nextDays = Math.round((next.getTime() - today.getTime()) / 86400000);
  const total = kr(Math.round(subItems.length * PRICE * SUB_FACTOR)) + a.perMonth;
  const status = subPaused ? a.statusPaused : subSkipped ? a.statusSkipped : a.statusActive;
  const days = (n: number) => `${n} ${sv ? 'dagar' : 'days'}`;

  const toggleSkip = () => {
    patch({ subSkipped: !subSkipped });
    flash(subSkipped ? a.savedToast : a.skipToast);
  };
  const togglePause = () => {
    patch({ subPaused: !subPaused });
    flash(subPaused ? a.resumedToast : a.pausedToast);
  };
  const skipLabel = subSkipped ? a.unskip : a.skipNext;
  const pauseLabel = subPaused ? a.resume : a.pause;
  const items = subItems.map((id) => PRODUCTS.find((p) => p.id === id)!);
  const addable = PRODUCTS.filter((p) => !subItems.includes(p.id));

  const tabs: [Tab, string][] = [
    ['overview', a.tabOverview],
    ['sub', a.tabSub],
    ['orders', a.tabOrders],
    ['settings', a.tabSettings],
  ];
  const thumb = 'h-full w-full object-contain mix-blend-multiply';

  return (
    <main className="wrap pb-[110px] pt-[46px]">
      <div className="mb-[26px] flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="h-display mb-2 text-[clamp(34px,6vw,46px)] leading-[1.03] tracking-[-0.045em]">{a.hi}, Elin</h1>
          <div className="text-[14.5px] text-ink/60">{a.member}</div>
        </div>
        <button
          onClick={() => {
            patch({ authed: false });
            router.push('/');
          }}
          className={ghost}
        >
          {a.logout}
        </button>
      </div>

      <div className="mb-[34px] flex flex-wrap gap-[9px]">
        {tabs.map(([k, l]) => (
          <button key={k} className="pill" data-on={tab === k} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid items-start gap-[22px] md:grid-cols-[1.35fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-[30px] text-cream">
            <div className="absolute -right-[60px] -top-[60px] h-60 w-60 rounded-full bg-[rgba(124,166,86,0.28)]" />
            <div className="relative">
              <div className="mb-4 text-[11.5px] font-bold uppercase tracking-[0.12em] opacity-65">{a.nextDelivery}</div>
              <div className="mb-2 flex flex-wrap items-baseline gap-3.5">
                <div className="h-display text-[clamp(34px,6vw,46px)] font-semibold leading-none tracking-[-0.04em]">{fmtDate(next)}</div>
                <div className="text-[15px] opacity-70">{a.inDays} {nextDays} {a.days}</div>
              </div>
              <div className="mb-6 mt-[22px] flex flex-wrap items-center gap-3">
                {items.map((p) => (
                  <div key={p.id} className="grid h-[54px] w-[54px] place-items-center overflow-hidden rounded-[14px] bg-cream/90">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(p.img)} alt={p[lang].name} className={thumb} />
                  </div>
                ))}
              </div>
              <div className="mb-1 text-[13.5px] opacity-60">{a.shipsTo}</div>
              <div className="mb-6 text-[15px] leading-[1.5]">Storgatan 14, 4 tr · 114 44 Stockholm</div>
              <div className="flex flex-wrap gap-2.5">
                <button onClick={toggleSkip} className={`${accBtn} border-transparent bg-cream text-ink hover:bg-lime`}>{skipLabel}</button>
                <button onClick={togglePause} className={`${accBtn} border-cream/40 bg-transparent text-cream hover:border-cream`}>{pauseLabel}</button>
              </div>
            </div>
          </div>
          <div className="grid gap-[22px]">
            <div className="card card-tight">
              <span className="status" data-paused={subPaused}>{status}</span>
              <div className="mb-1.5 mt-[18px] text-[14.5px] text-ink/65">{a.deliveryEvery} {days(subInterval)}</div>
              <div className="h-display text-[34px] font-semibold tracking-[-0.035em]">{total}</div>
            </div>
            <div className="card card-tight">
              <div className={label}>{a.savedTitle}</div>
              <div className="h-display text-[40px] font-semibold leading-none tracking-[-0.04em] text-green">{kr(1284)}</div>
              <div className="mt-2.5 text-[14.5px] leading-[1.5] text-ink/65">{a.savedBody}</div>
              <div className="mt-4 border-t border-ink/[0.12] pt-4 text-sm text-ink/65">14 {a.deliveriesCount}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'sub' && (
        <div className="grid items-start gap-[22px] md:grid-cols-[1.4fr_1fr]">
          <div className="card">
            <div className="mb-[22px] flex items-center justify-between gap-4">
              <div className="h-display text-[27px] font-semibold tracking-[-0.03em]">{a.subTitle}</div>
              <span className="status" data-paused={subPaused}>{status}</span>
            </div>
            <div className="grid gap-3.5">
              {items.map((p) => (
                <div key={p.id} className="flex items-center gap-4 rounded-[18px] border border-ink/[0.12] px-4 py-3.5">
                  <Link href={`/produkter/${p.id}/`} className="grid h-[62px] w-[62px] flex-none place-items-center overflow-hidden rounded-[14px] bg-sand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(p.img)} alt={p[lang].name} className={thumb} />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="mb-[3px] text-[17px] font-semibold">{p[lang].name}</div>
                    <div className="text-[13.5px] leading-[1.4] text-ink/60">{p[lang].tag}</div>
                  </div>
                  <div className="whitespace-nowrap text-[15px] font-semibold max-sm:hidden">{kr(subUnit(PRICE))}</div>
                  <button
                    disabled={subItems.length < 2}
                    onClick={() => {
                      patch({ subItems: subItems.filter((x) => x !== p.id) });
                      flash(a.savedToast);
                    }}
                    className="p-1 text-[13.5px] text-ink/50 hover:text-orange disabled:opacity-40 disabled:hover:text-ink/50"
                  >
                    {a.removeItem}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-ink/[0.12] pt-6">
              <div className={label}>{a.changeInterval}</div>
              <div className="flex flex-wrap gap-[9px]">
                {INTERVALS.map((n) => (
                  <button
                    key={n}
                    className="pill"
                    data-on={subInterval === n}
                    onClick={() => {
                      patch({ subInterval: n });
                      flash(a.intervalToast);
                    }}
                  >
                    {days(n)}
                  </button>
                ))}
              </div>
            </div>

            {addable.length > 0 && (
              <div className="mt-[26px] border-t border-ink/[0.12] pt-6">
                <div className={label}>{a.addProduct}</div>
                <div className="flex flex-wrap gap-2.5">
                  {addable.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        patch({ subItems: [...subItems, p.id] });
                        flash(a.savedToast);
                      }}
                      className="flex items-center gap-2.5 rounded-full border-[1.5px] border-ink/20 bg-transparent py-[7px] pl-[7px] pr-4 text-sm font-semibold hover:border-green hover:text-green"
                    >
                      <span className="grid h-[30px] w-[30px] flex-none place-items-center overflow-hidden rounded-full bg-sand">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={asset(p.img)} alt="" className={thumb} />
                      </span>
                      + {p[lang].name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-[22px]">
            <div className="card card-tight">
              <div className="mb-1.5 text-[14.5px] text-ink/65">{a.deliveryEvery} {days(subInterval)}</div>
              <div className="h-display mb-1 text-[34px] font-semibold tracking-[-0.035em]">{total}</div>
              <div className="mb-5 text-sm text-ink/60">{a.nextDelivery}: {fmtDate(next)}</div>
              <div className="grid gap-2.5">
                <button onClick={toggleSkip} className={ghost}>{skipLabel}</button>
                <button onClick={togglePause} className={ghost}>{pauseLabel}</button>
              </div>
              <button className={plain}>{a.cancelSub}</button>
            </div>
            <div className="rounded-3xl border border-ink/[0.13] bg-lime/35 p-[22px]">
              <div className="h-display mb-2 text-xl font-semibold tracking-[-0.025em]">{a.helpTitle}</div>
              <div className="mb-4 text-[14.5px] leading-[1.55] text-ink/70">{a.helpBody}</div>
              <a href="mailto:hej@healthified.se" className={`${solid} inline-block`}>{a.helpCta}</a>
            </div>
          </div>
        </div>
      )}

      {tab === 'orders' && (
        <div className="grid max-w-[900px] gap-4">
          {ORDERS.map((o) => (
            <div key={o.no} className="card card-tight">
              <div className="mb-[18px] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3.5">
                  <span className="text-base font-semibold">{a.orderNo} #{o.no}</span>
                  <span className="text-sm text-ink/60">{fmtFull(o.date)}</span>
                  <span className="status !px-3 !py-[5px] !text-xs">{a.delivered}</span>
                </div>
                <div className="text-base font-semibold">{kr(o.total)}</div>
              </div>
              <div className="mb-[18px] flex flex-wrap gap-2.5">
                {o.ids.map((id) => {
                  const p = PRODUCTS.find((x) => x.id === id)!;
                  return (
                    <div key={id} className="flex items-center gap-2.5 rounded-full bg-ink/[0.04] py-1.5 pl-1.5 pr-[15px] text-[13.5px]">
                      <span className="grid h-[30px] w-[30px] flex-none place-items-center overflow-hidden rounded-full bg-sand">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={asset(p.img)} alt="" className={thumb} />
                      </span>
                      {p[lang].name}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => {
                    o.ids.forEach((id) => addToCart(id, false));
                    router.push('/varukorg/');
                  }}
                  className={ghost}
                >
                  {a.reorder}
                </button>
                <button className={ghost}>{a.invoice}</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'settings' && (
        <div className="grid max-w-[1000px] items-start gap-[22px] md:grid-cols-[1.2fr_1fr]">
          <div className="card">
            <div className="h-display mb-[22px] text-[27px] font-semibold tracking-[-0.03em]">{a.settingsTitle}</div>
            <div className="grid gap-0.5">
              {[
                [a.name, 'Elin Sandberg'],
                [a.email, 'elin.sandberg@mail.se'],
                [a.phone, '070-412 88 30'],
                [a.address, 'Storgatan 14, 4 tr\n114 44 Stockholm'],
                [a.payment, 'Klarna · Kort ····4812'],
              ].map(([l, v]) => (
                <div key={l} className="flex items-start justify-between gap-5 border-b border-ink/10 py-[15px]">
                  <div className="min-w-0">
                    <div className="mb-[5px] text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink/50">{l}</div>
                    <div className="whitespace-pre-line text-base leading-[1.5]">{v}</div>
                  </div>
                  <button className="flex-none p-1 text-sm font-semibold text-green hover:text-orange">{a.change}</button>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="h-display mb-[18px] text-[22px] font-semibold tracking-[-0.025em]">{a.notif}</div>
            <div className="grid gap-4">
              {(
                [
                  ['mail', a.notifMail],
                  ['sms', a.notifSms],
                  ['news', a.notifNews],
                ] as const
              ).map(([k, l]) => (
                <div key={k} className="flex items-center justify-between gap-4">
                  <div className="text-[15px] leading-[1.45]">{l}</div>
                  <button
                    role="switch"
                    aria-checked={notif[k]}
                    aria-label={l}
                    className="switch !h-[26px]"
                    data-on={notif[k]}
                    onClick={() => patch({ notif: { ...notif, [k]: !notif[k] } })}
                  >
                    <span />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
