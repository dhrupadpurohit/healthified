'use client';

import type { ReactNode } from 'react';

export function AccordionItem({
  title, open, onToggle, children, size = 'faq',
}: { title: string; open: boolean; onToggle: () => void; children: ReactNode; size?: 'faq' | 'product' }) {
  const faq = size === 'faq';
  return (
    <div className={faq ? 'border-b border-ink/[0.16]' : 'border-t border-ink/[0.16]'}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`h-display flex w-full items-center justify-between text-left font-medium tracking-[-0.02em] text-ink ${
          faq ? 'gap-5 py-5 text-[19px]' : 'py-[18px] text-lg'
        }`}
      >
        {title}
        <span className={`flex-none text-[22px] text-green transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
