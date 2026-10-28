import { asset } from '@/lib/utils';

type Variant = 'hero' | 'sub' | 'made';

const bg: Record<Variant, string> = {
  hero: 'bg-[linear-gradient(160deg,#F5F3E9_0%,#E4EFC8_100%)]',
  sub: 'bg-[linear-gradient(155deg,#EFF4DC_0%,#DDEBC0_100%)]',
  made: 'bg-[linear-gradient(150deg,#F3F2E7_0%,#E1EEC5_100%)]',
};

// Produktbilderna har vit bakgrund och multipliceras in i panelens gradient.
const imgs: Record<Variant, { src: string; cls: string }[]> = {
  hero: [{ src: '/products/bundle-omega-d3.webp', cls: 'w-[96%] animate-[floatY_8s_ease-in-out_infinite]' }],
  sub: [
    { src: '/products/boost.webp', cls: 'left-[-6%] top-[6%] w-[68%] -rotate-6' },
    { src: '/products/hud.webp', cls: 'right-[-8%] top-[30%] w-[68%] rotate-6' },
    { src: '/products/d3.webp', cls: 'bottom-[-6%] left-[14%] w-[62%]' },
  ],
  made: [
    { src: '/products/multivitamin.webp', cls: 'left-[-4%] top-[8%] w-[64%] -rotate-3' },
    { src: '/products/omega.webp', cls: 'bottom-[-2%] right-[-4%] w-[66%] rotate-3' },
  ],
};

export function Showcase({ variant, ratio = 'aspect-square', radius = 'rounded-[28px]', className = '' }: {
  variant: Variant; ratio?: string; radius?: string; className?: string;
}) {
  const list = imgs[variant];
  const single = variant === 'hero';
  return (
    <div className={`relative overflow-hidden ${ratio} ${radius} ${bg[variant]} ${single ? 'grid place-items-center' : ''} ${className}`}>
      {list.map((i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i.src} src={asset(i.src)} alt="" className={`${single ? 'relative' : 'absolute'} mix-blend-multiply ${i.cls}`} />
      ))}
    </div>
  );
}
