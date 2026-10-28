'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { ACCT, BUNDLES, PRICE, PRODUCTS, SUB_FACTOR, T, type Lang } from './data';

export type CartLine = { key: string; id: string; sub: boolean; interval: number; qty: number };
export type Notif = { mail: boolean; sms: boolean; news: boolean };

type Persisted = {
  lang: Lang;
  cart: CartLine[];
  interval: number;
  showSub: boolean;
  authed: boolean;
  subPaused: boolean;
  subSkipped: boolean;
  subInterval: number;
  subItems: string[];
  notif: Notif;
};

const DEFAULTS: Persisted = {
  lang: 'sv',
  cart: [],
  interval: 30,
  showSub: true,
  authed: false,
  subPaused: false,
  subSkipped: false,
  subInterval: 30,
  subItems: ['d3', 'hud', 'omega'],
  notif: { mail: true, sms: true, news: false },
};

const STORAGE_KEY = 'healthified-state-v1';

type Store = Persisted & {
  t: (typeof T)[Lang];
  a: (typeof ACCT)[Lang];
  patch: (p: Partial<Persisted>) => void;
  toast: string | null;
  flash: (msg: string) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  addToCart: (id: string, sub: boolean, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
  clearCart: () => void;
  cartCount: number;
  kr: (n: number) => string;
  fmtDate: (d: Date) => string;
  fmtFull: (iso: string) => string;
};

const Ctx = createContext<Store | null>(null);

export function itemInfo(id: string, lang: Lang) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (p) return { name: p[lang].name, img: p.img, price: PRICE };
  const b = BUNDLES.find((x) => x.id === id)!;
  return { name: b[lang].name, img: PRODUCTS.find((x) => x.id === b.ids[0])!.img, price: b.price };
}

export function subUnit(price: number) {
  return Math.round(price * SUB_FACTOR);
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<Persisted>(DEFAULTS);
  const [toast, setToast] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const ready = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setS({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
      /* ogiltig eller blockerad lagring – kör med standardvärden */
    }
    ready.current = true;
  }, []);

  useEffect(() => {
    if (!ready.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      /* ignorera */
    }
    document.documentElement.lang = s.lang;
  }, [s]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const patch = useCallback((p: Partial<Persisted>) => setS((prev) => ({ ...prev, ...p })), []);

  const t = T[s.lang];
  const a = ACCT[s.lang];

  const flash = useCallback((msg: string) => {
    clearTimeout(timer.current);
    setToast(msg);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const addToCart = useCallback(
    (id: string, sub: boolean, qty = 1) => {
      setS((prev) => {
        const key = id + ':' + (sub ? 'sub' + prev.interval : 'once');
        const cart = prev.cart.slice();
        const i = cart.findIndex((l) => l.key === key);
        if (i >= 0) cart[i] = { ...cart[i], qty: cart[i].qty + qty };
        else cart.push({ key, id, sub, interval: prev.interval, qty });
        return { ...prev, cart };
      });
      flash(T[s.lang].toastAdded);
    },
    [flash, s.lang],
  );

  const setQty = useCallback(
    (key: string, qty: number) =>
      setS((prev) => ({ ...prev, cart: prev.cart.map((l) => (l.key === key ? { ...l, qty: Math.max(1, qty) } : l)) })),
    [],
  );
  const removeLine = useCallback((key: string) => setS((prev) => ({ ...prev, cart: prev.cart.filter((l) => l.key !== key) })), []);
  const clearCart = useCallback(() => setS((prev) => ({ ...prev, cart: [] })), []);

  const kr = useCallback((n: number) => n.toLocaleString('sv-SE') + ' kr', []);
  const locale = s.lang === 'sv' ? 'sv-SE' : 'en-GB';
  const fmtDate = useCallback((d: Date) => d.toLocaleDateString(locale, { day: 'numeric', month: 'long' }), [locale]);
  const fmtFull = useCallback(
    (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' }),
    [locale],
  );

  const value = useMemo<Store>(
    () => ({
      ...s,
      t,
      a,
      patch,
      toast,
      flash,
      menuOpen,
      setMenuOpen,
      addToCart,
      setQty,
      removeLine,
      clearCart,
      cartCount: s.cart.reduce((n, l) => n + l.qty, 0),
      kr,
      fmtDate,
      fmtFull,
    }),
    [s, t, a, patch, toast, flash, menuOpen, addToCart, setQty, removeLine, clearCart, kr, fmtDate, fmtFull],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useStore måste användas inom StoreProvider');
  return v;
}
