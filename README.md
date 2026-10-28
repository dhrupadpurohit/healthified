# Healthified – ny webbshop

Next.js (App Router, statisk export) + Tailwind CSS v4. Återskapad från designöverlämningen
`HF modernisering` (startsida, produkter, produktsida, quiz, varukorg, Om oss, guider, kundkonto; sv/en).

All data är demo och ligger i `lib/data.ts`. Varukorg, språk och kontoläge sparas i `localStorage`
– det finns ingen backend (se "Nästa steg").

## Utveckla

```bash
npm install
npm run dev
```

## Bygga statiskt

```bash
npm run build   # skriver ut/ med statiska filer
```

Sätt `NEXT_PUBLIC_BASE_PATH=/<repo-namn>` när sajten ska serveras under en undersökväg (GitHub Pages).

## Deploy

Varje push till `main` bygger och publicerar via GitHub Actions (`.github/workflows/deploy.yml`).

## Produktbilder

Originalen (1920 px PNG, 7–13 MB) är konverterade till webp i `public/products/`:

```bash
node scripts/optimize-images.mjs <mapp-med-originalpng>
```

## Att åtgärda innan skarp lansering

- Näringsvärden för Omega 3 och Fatburner är hämtade från etiketterna på produktbilderna. Etiketten för Fatburner anger krom som "50 mg"
  men 125 % av referensintaget motsvarar 50 µg – verifiera. Omega 3-etiketten anger 2 kapslar per portion men rekommenderar 3 kapslar dagligen.
  Övriga produkters värden är platshållare.
- Kundomdömen och kontodata (Elin Sandberg, ordrar) är demo.
- Backend saknas: produkter/lager, prenumerationer, ordrar, inloggning och betalning (Klarna/kort/Swish).
