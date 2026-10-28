import { notFound } from 'next/navigation';
import { GUIDES } from '@/lib/data';
import { GuideView } from '@/components/GuideView';

export function generateStaticParams() {
  return GUIDES.sv.map((g) => ({ id: g.id }));
}

export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!GUIDES.sv.some((g) => g.id === id)) notFound();
  return <GuideView id={id} />;
}
