import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import { ProductView } from '@/components/ProductView';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!PRODUCTS.some((p) => p.id === id)) notFound();
  return <ProductView id={id} />;
}
