import { CATS, PRODUCTS, type CatKey, type Lang, type Product } from './data';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefixar publika filer med basePath (krävs på GitHub Pages under /<repo>). */
export const asset = (path: string) => BASE + path;

export const catLabel = (p: Product, lang: Lang) => CATS[lang][p.cat as CatKey];

export const findProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
