'use client';

import { useStore } from '@/lib/store';

export function Toast() {
  const { toast } = useStore();
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-7 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-green px-[26px] py-3.5 text-[14.5px] font-bold text-cream transition-[opacity,transform] duration-200 ${
        toast ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      {toast}
    </div>
  );
}
