import { asset } from '@/lib/utils';

type Variant = 'hero' | 'sub' | 'made';

const bg: Record<Variant, string> = {
  hero: 'bg-[linear-gradient(160deg,#F5F3E9_0%,#E4EFC8_100%)]',
  sub: 'bg-[linear-gradient(155deg,#EFF4DC_0%,#DDEBC0_100%)]',
  made: 'bg-[linear-gradient(150deg,#F3F2E7_0%,#E1EEC5_100%)]',
};

const art: Record<Variant, string> = {
  hero: '/brand/Group-1413371941.png',
  sub: '/brand/Group-1413371334.png',
  made: '/brand/Group-1413371333.png',
};

/** Illustrationspanel enligt designen. `width` är bildens bredd i panelen. */
export function Showcase({ variant, width = 'w-[84%]', float = false, ratio = 'aspect-square', radius = 'rounded-[28px]', className = '' }: {
  variant: Variant; width?: string; float?: boolean; ratio?: string; radius?: string; className?: string;
}) {
  return (
    <div className={`relative grid place-items-center overflow-hidden ${ratio} ${radius} ${bg[variant]} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(art[variant])} alt="" className={`relative ${width} ${float ? 'animate-[floatY_8s_ease-in-out_infinite]' : ''}`} />
    </div>
  );
}
