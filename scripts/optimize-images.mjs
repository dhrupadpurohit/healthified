// Konverterar de stora originalbilderna (1920x1920 PNG, 7-13 MB) till lätta webp-filer.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const src = process.argv[2];
if (!src) { console.error('Usage: node scripts/optimize-images.mjs <dir-with-pngs>'); process.exit(1); }
const out = path.resolve('public/products');
await mkdir(out, { recursive: true });

for (const f of (await readdir(src)).filter((n) => n.endsWith('.png'))) {
  const dest = path.join(out, f.replace(/\.png$/, '.webp'));
  const info = await sharp(path.join(src, f)).resize(960, 960, { fit: 'inside' }).webp({ quality: 82 }).toFile(dest);
  console.log(f, '→', (info.size / 1024).toFixed(0) + ' kB');
}
