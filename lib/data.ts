// Data och copy (sv/en) hämtad ur designprototypen Healthified.dc.html.
// Näringsvärden, omdömen och kontodata är platshållare – se README i designöverlämningen.
export const IMG = '/products/';

export const PRODUCTS = [
  { id: 'd3', img: IMG + 'd3.webp', cat: 'bas', rating: 4.9, reviews: 214,
    sv: { name: 'Vitamin D', tag: 'Immunförsvar och normal benhälsa', desc: 'Svenska vintrar ger för lite sol. Vitamin D3 i kallpressad olja för bättre upptag – en kapsel om dagen, året runt.', dose: 'Ta 1 kapsel dagligen tillsammans med mat. Överskrid inte rekommenderad dos.' },
    en: { name: 'Vitamin D', tag: 'Immune system and normal bone health', desc: 'Swedish winters offer too little sun. Vitamin D3 in cold-pressed oil for better uptake – one capsule a day, all year.', dose: 'Take 1 capsule daily with food. Do not exceed the recommended dose.' },
    facts: [ { name: 'Vitamin D3 (kolekalciferol)', amount: '20 µg', nrv: '400 %' }, { name: 'Kallpressad olivolja', amount: '250 mg', nrv: '–' }, { name: 'E-vitamin (tokoferol)', amount: '6 mg', nrv: '50 %' } ] },
  { id: 'omega', img: IMG + 'omega.webp', cat: 'bas', rating: 4.8, reviews: 176,
    sv: { name: 'Omega 3', tag: 'EPA och DHA för hjärta och hjärna', desc: 'Renad fiskolja med hög halt EPA och DHA. Tredjepartstestad för tungmetaller, utan eftersmak.', dose: 'Ta 3 kapslar dagligen, gärna tillsammans med vitamin D3.' },
    en: { name: 'Omega 3', tag: 'EPA and DHA for heart and brain', desc: 'Purified fish oil high in EPA and DHA. Third-party tested for heavy metals, without aftertaste.', dose: 'Take 3 capsules daily, preferably together with vitamin D3.' },
    facts: [ { name: 'Fiskolja', amount: '2000 mg', nrv: '–' }, { name: 'EPA', amount: '360 mg', nrv: '–' }, { name: 'DHA', amount: '400 mg', nrv: '–' }, { name: 'Vitamin E', amount: '10 mg', nrv: '–' } ] },
  { id: 'multivitamin', img: IMG + 'multivitamin.webp', cat: 'bas', rating: 4.7, reviews: 302,
    sv: { name: 'Multivitamin', tag: 'Bredspektrum för vardagen', desc: 'Tjugoen vitaminer och mineraler i doser kroppen faktiskt kan använda. Grunden när kosten varierar.', dose: 'Ta 1 tablett dagligen med frukost.' },
    en: { name: 'Multivitamin', tag: 'Broad spectrum for everyday life', desc: 'Twenty-one vitamins and minerals in doses the body can actually use. The base when your diet varies.', dose: 'Take 1 tablet daily with breakfast.' },
    facts: [ { name: 'Vitamin C', amount: '80 mg', nrv: '100 %' }, { name: 'Vitamin B12', amount: '2,5 µg', nrv: '100 %' }, { name: 'Magnesium', amount: '112 mg', nrv: '30 %' }, { name: 'Zink', amount: '10 mg', nrv: '100 %' }, { name: 'Selen', amount: '55 µg', nrv: '100 %' } ] },
  { id: 'boost', img: IMG + 'boost.webp', cat: 'immun', rating: 4.9, reviews: 141,
    sv: { name: 'Immune Boost', tag: 'Extra stöd i förkylningssäsong', desc: 'C-vitamin, zink och selen i samverkan. Tänkt för perioder med hög belastning – resor, träning, mörka månader.', dose: 'Ta 1 kapsel dagligen, upp till 2 vid behov.' },
    en: { name: 'Immune Boost', tag: 'Extra support in cold season', desc: 'Vitamin C, zinc and selenium working together. Made for demanding stretches – travel, training, dark months.', dose: 'Take 1 capsule daily, up to 2 when needed.' },
    facts: [ { name: 'Vitamin C', amount: '500 mg', nrv: '625 %' }, { name: 'Zink', amount: '15 mg', nrv: '150 %' }, { name: 'Selen', amount: '55 µg', nrv: '100 %' }, { name: 'Vitamin D3', amount: '10 µg', nrv: '200 %' } ] },
  { id: 'hud', img: IMG + 'hud.webp', cat: 'skonhet', rating: 4.8, reviews: 268,
    sv: { name: 'Hud, hår & naglar', tag: 'Biotin, zink och kisel', desc: 'Näring inifrån för hud, hår och naglar. Effekten kommer med kontinuitet – räkna med tre månader.', dose: 'Ta 2 kapslar dagligen med vatten.' },
    en: { name: 'Skin, hair & nails', tag: 'Biotin, zinc and silica', desc: 'Nutrition from within for skin, hair and nails. Results come with continuity – count on three months.', dose: 'Take 2 capsules daily with water.' },
    facts: [ { name: 'Biotin', amount: '50 µg', nrv: '100 %' }, { name: 'Zink', amount: '10 mg', nrv: '100 %' }, { name: 'Kisel (bambuextrakt)', amount: '40 mg', nrv: '–' }, { name: 'Vitamin C', amount: '80 mg', nrv: '100 %' } ] },
  { id: 'krom', img: IMG + 'krom.webp', cat: 'form', rating: 4.6, reviews: 96,
    sv: { name: 'Krom', tag: 'Normal blodsockeromsättning', desc: 'Krom bidrar till normal omsättning av makronäringsämnen och till att bibehålla normal blodsockernivå.', dose: 'Ta 1 tablett dagligen med måltid.' },
    en: { name: 'Chromium', tag: 'Normal blood sugar metabolism', desc: 'Chromium contributes to normal macronutrient metabolism and to maintaining normal blood glucose levels.', dose: 'Take 1 tablet daily with a meal.' },
    facts: [ { name: 'Krom (pikolinat)', amount: '40 µg', nrv: '100 %' }, { name: 'Kanelextrakt', amount: '100 mg', nrv: '–' } ] },
  { id: 'fatburner', img: IMG + 'fatburner.webp', cat: 'form', rating: 4.5, reviews: 122,
    sv: { name: 'Fatburner', tag: 'Grönt te, koffein och L-karnitin', desc: 'Ett komplement till träning och kost – inte en ersättning. Grönt te-extrakt, koffein och L-karnitin.', dose: 'Ta 3 tabletter dagligen, senast kl 15 om du är känslig för koffein.' },
    en: { name: 'Fatburner', tag: 'Green tea, caffeine and L-carnitine', desc: 'A complement to training and diet – not a replacement. Green tea extract, caffeine and L-carnitine.', dose: 'Take 3 tablets daily, before 3 pm if sensitive to caffeine.' },
    facts: [ { name: 'Koffein', amount: '300 mg', nrv: '–' }, { name: 'Grönt te-extrakt', amount: '150 mg', nrv: '–' }, { name: 'Bioperine®', amount: '5 mg', nrv: '–' }, { name: 'L-karnitin L-tartrat', amount: '50 mg', nrv: '–' }, { name: 'Zink', amount: '15 mg', nrv: '150 %' }, { name: 'Vitamin B1', amount: '1 mg', nrv: '91 %' }, { name: 'Niacin', amount: '16 mg', nrv: '100 %' }, { name: 'Vitamin B2', amount: '2,4 mg', nrv: '171 %' }, { name: 'Krom', amount: '50 µg', nrv: '125 %' }, { name: 'L-arginin', amount: '100 mg', nrv: '–' }, { name: 'DL-fenylalanin', amount: '200 mg', nrv: '–' } ] }
];

export const BUNDLES = [
  { id: 'kur-immun', ids: ['d3', 'boost', 'multivitamin'], price: 449, was: 597,
    sv: { name: 'Vinterkuren', tagline: 'Populärast', body: 'Grundskyddet genom de mörka månaderna. Skickas som en samlad leverans varje månad.' },
    en: { name: 'The Winter Cure', tagline: 'Most popular', body: 'Base protection through the dark months. Sent as one combined delivery every month.' } },
  { id: 'kur-energi', ids: ['multivitamin', 'omega', 'krom'], price: 449, was: 597,
    sv: { name: 'Energikuren', tagline: 'Balans', body: 'För dig som vill hålla ett jämnt tempo hela veckan, inte bara på måndagen.' },
    en: { name: 'The Energy Cure', tagline: 'Balance', body: 'For keeping an even pace all week, not just on Monday.' } },
  { id: 'kur-skonhet', ids: ['hud', 'omega', 'd3'], price: 449, was: 597,
    sv: { name: 'Skönhetskuren', tagline: '3 mån', body: 'Hud, hår och naglar behöver tid. Tre månader är där du börjar se skillnad.' },
    en: { name: 'The Beauty Cure', tagline: '3 months', body: 'Skin, hair and nails need time. Three months is where you start seeing a difference.' } }
];

export const QUIZ = [
  { sv: 'Vad vill du främst förbättra?', en: 'What would you most like to improve?', opts: [
    { sv: 'Energi i vardagen', en: 'Everyday energy', w: { multivitamin: 3, omega: 2, krom: 2 } },
    { sv: 'Immunförsvaret', en: 'My immune system', w: { boost: 3, d3: 3 } },
    { sv: 'Hud, hår och naglar', en: 'Skin, hair and nails', w: { hud: 4, omega: 1 } },
    { sv: 'Vikt och form', en: 'Weight and shape', w: { fatburner: 3, krom: 3 } } ] },
  { sv: 'Hur ofta rör du på dig?', en: 'How often do you exercise?', opts: [
    { sv: 'Sällan', en: 'Rarely', w: { multivitamin: 2, krom: 1 } },
    { sv: '1–2 gånger i veckan', en: '1–2 times a week', w: { multivitamin: 2, omega: 1 } },
    { sv: '3–4 gånger i veckan', en: '3–4 times a week', w: { omega: 2, fatburner: 1 } },
    { sv: '5 eller fler', en: '5 or more', w: { omega: 3, multivitamin: 1, fatburner: 1 } } ] },
  { sv: 'Hur mycket dagsljus får du på vintern?', en: 'How much daylight do you get in winter?', opts: [
    { sv: 'Nästan inget – inne hela dagen', en: 'Almost none – indoors all day', w: { d3: 5, boost: 2 } },
    { sv: 'En kort promenad om dagen', en: 'A short walk each day', w: { d3: 3 } },
    { sv: 'Jag är ute mycket', en: 'I am outdoors a lot', w: { d3: 1, multivitamin: 1 } } ] },
  { sv: 'Hur ofta äter du fet fisk?', en: 'How often do you eat oily fish?', opts: [
    { sv: 'Aldrig', en: 'Never', w: { omega: 5 } },
    { sv: 'Någon gång i månaden', en: 'Once a month or so', w: { omega: 3 } },
    { sv: 'Ett par gånger i veckan', en: 'A couple of times a week', w: { multivitamin: 1 } } ] },
  { sv: 'Hur ser din kost ut?', en: 'What does your diet look like?', opts: [
    { sv: 'Blandkost', en: 'Mixed diet', w: { multivitamin: 1 } },
    { sv: 'Vegetarisk', en: 'Vegetarian', w: { multivitamin: 3, d3: 2 } },
    { sv: 'Vegansk', en: 'Vegan', w: { multivitamin: 4, d3: 3 } },
    { sv: 'Lite oregelbunden', en: 'A bit irregular', w: { multivitamin: 3, boost: 1 } } ] },
  { sv: 'Hur känns eftermiddagarna?', en: 'How do your afternoons feel?', opts: [
    { sv: 'Jag kraschar helt', en: 'I crash completely', w: { krom: 3, multivitamin: 2 } },
    { sv: 'Lite trött, går över', en: 'A little tired, it passes', w: { multivitamin: 2, omega: 1 } },
    { sv: 'Stabilt hela dagen', en: 'Stable all day', w: { hud: 1, omega: 1 } } ] }
];

export const T = {
  sv: {
    tick1: 'Fri frakt över 499 kr', tick2: 'Tillverkat i Sverige', tick3: 'GMP-certifierad tillverkning', tick4: 'Spara på prenumeration',
    navProducts: 'Produkter', navSub: 'Prenumeration', navQuiz: 'Hitta rätt tillskott', navGuides: 'Guider', navAbout: 'Om oss', cart: 'Varukorg',
    heroEyebrow: 'Hälsoprodukter från Sverige', heroA: 'Ät bra.', heroB: 'Må bra.',
    heroBody: 'Vi håller dig och din familj med det ni behöver för fysisk och mental hälsa – oavsett säsong. Enkla, rena tillskott som gör sitt jobb när de tas kontinuerligt.',
    ctaShop: 'Se produkterna', ctaQuiz: 'Hitta rätt tillskott', rating: '4,8 av 5 · 1 319 omdömen',
    trustSweden: 'Tillverkat i Sverige', trustGmp: 'GMP-certifierat och tredjepartstestat', trustReturn: '14 dagars öppet köp',
    badgeSubLabel: 'Prenumeration', badgeMade: 'Made in Sweden',
    prodEyebrow: 'Svensk kvalitet', prodTitle: 'Produkter som gör jobbet', showSubPrice: 'Visa prenumerationspris',
    quizCardTitle: 'Vet du inte var du ska börja?', quizCardBody: 'Sex frågor om din vardag, kost och träning. Du får tre produkter som faktiskt passar dig – inget mer.', quizCardCta: 'Starta quizet',
    subEyebrow: 'Kontinuitet', subTitle: 'Prenumerera och glöm bort det', subBody: 'Samtliga av våra produkter ger bäst effekt när de tas kontinuerligt. Därför bygger vi hela sortimentet för prenumeration: du väljer intervall, vi skickar hem det, du sparar på varje leverans.',
    subStatNum: '30/60/90', subStatLabel: 'Dagar mellan leveranser – du väljer',
    intervalLabel: 'Leverans var', addBundle: 'Lägg till kur',
    bundleTitle: 'Färdiga kurer, skickade varje månad', bundleBody: 'Tre produkter i en samlad leverans, med rabatt. Byt eller pausa när du vill.',
    madeEyebrow: 'Tillverkningen', madeTitle: 'Allt produceras i Sverige', madeBody: 'Vi arbetar bara med svenska leverantörer och bara med högsta kvalitet. Tillverkningen sker i GMP-certifierade anläggningar och varje batch tredjepartstestas innan den lämnar fabriken.',
    revTitle: 'Vad våra kunder säger', revCount: '1 319 omdömen', pdRevTitle: 'Omdömen om produkten',
    guideEyebrow: 'Guider', guideTitle: 'Läs på innan du börjar', readMore: 'Läs guiden',
    backGuides: 'Alla guider', guideRelTitle: 'Produkten som hör till', guideMore: 'Fler guider',
    guideDisc: 'Guiderna är allmän information om kost och tillskott och ersätter inte medicinsk rådgivning. Är du gravid, ammar eller medicinerar – prata med din läkare först.',
    faqTitle: 'Vanliga frågor', faqBody: 'Hittar du inte svaret? Skriv till oss – vi svarar samma dag på vardagar.',
    shopEyebrow: 'Hela sortimentet', shopTitle: 'Produkter', shopBody: 'Sju tillskott, inga fyllnadsprodukter. Alla tillverkade i Sverige och tredjepartstestade.',
    backToShop: 'Tillbaka till produkterna',
    buyOnce: 'Köp en gång', buySub: 'Prenumerera',
    shipNote: 'Fri frakt över 499 kr', pauseNote: 'Pausa eller avsluta när du vill',
    thSub: 'Innehåll per dagsdos', thAmt: 'Mängd', thNrv: '% av RI',
    secFacts: 'Innehåll och näringsvärden', secDose: 'Dosering', secMade: 'Om tillverkningen',
    madeText: 'Tillverkad i Sverige i GMP-certifierad anläggning. Varje batch analyseras av oberoende laboratorium innan den släpps. Utan onödiga tillsatser.',
    otherIng: 'Övriga ingredienser: växtbaserad kapsel (HPMC), risskal. Kosttillskott bör inte användas som alternativ till en varierad kost.',
    add: 'Lägg till', addAll: 'Lägg till alla tre', restart: 'Gör om quizet', back: 'Tillbaka',
    quizEyebrow: 'Hitta rätt tillskott', quizResultEyebrow: 'Ditt resultat', quizResultTitle: 'Det här skulle vi rekommendera dig',
    quizResultBody: 'Baserat på dina svar. Lägg till som prenumeration så sparar du på varje leverans och slipper tänka på det igen.',
    cartTitle: 'Varukorg', cartEmpty: 'Din varukorg är tom.', checkoutTitle: 'Leveransuppgifter',
    fName: 'För- och efternamn', fEmail: 'E-post', fPhone: 'Telefon', fAddr: 'Adress', fZip: 'Postnummer', fCity: 'Ort',
    summary: 'Sammanfattning', subtotal: 'Delsumma', subDiscount: 'Prenumerationsrabatt', shipping: 'Frakt', total: 'Totalt', vatNote: 'Priserna inkluderar moms. Prenumerationer förnyas automatiskt enligt valt intervall.',
    placeOrder: 'Slutför köpet', free: 'Fri',
    aboutEyebrow: 'Om oss', aboutTitle: 'Healthified drivs av entusiaster', aboutLead: 'Vi startade eftersom vi såg ett behov: familjer som behövde produkter som stärker både mental och fysisk hälsa – utan krångel och utan tvivel om innehållet.',
    aboutCtaTitle: 'Osäker på var du börjar?', aboutCtaBody: 'Sex frågor och du har ett förslag som utgår från din vardag, inte från vad vi vill sälja.',
    footTag: 'Må bra – A.L.L.T.I.D', footBody: 'Healthified ska vara det naturliga valet för medvetna individer som ser fördelen med att må bra.', footRights: 'Alla rättigheter förbehållna', footDisclaimer: 'Kosttillskott ersätter inte en varierad kost och hälsosam livsstil.',
    toastAdded: 'Lagt i varukorgen', toastOrder: 'Tack! Din order är mottagen.'
  },
  en: {
    tick1: 'Free shipping over 499 kr', tick2: 'Made in Sweden', tick3: 'GMP-certified manufacturing', tick4: 'Save on subscriptions',
    navProducts: 'Products', navSub: 'Subscription', navQuiz: 'Find your supplement', navGuides: 'Guides', navAbout: 'About', cart: 'Cart',
    heroEyebrow: 'Health products from Sweden', heroA: 'Eat well.', heroB: 'Feel well.',
    heroBody: 'We keep you and your family stocked with what you need for physical and mental health – whatever the season. Simple, clean supplements that do their job when taken consistently.',
    ctaShop: 'See the products', ctaQuiz: 'Find your supplement', rating: '4.8 out of 5 · 1,319 reviews',
    trustSweden: 'Made in Sweden', trustGmp: 'GMP-certified and third-party tested', trustReturn: '14-day returns',
    badgeSubLabel: 'Subscription', badgeMade: 'Made in Sweden',
    prodEyebrow: 'Swedish quality', prodTitle: 'Products that do the work', showSubPrice: 'Show subscription price',
    quizCardTitle: 'Not sure where to start?', quizCardBody: 'Six questions about your routine, diet and training. You get three products that actually suit you – nothing more.', quizCardCta: 'Start the quiz',
    subEyebrow: 'Continuity', subTitle: 'Subscribe and forget about it', subBody: 'All of our products work best when taken consistently. That is why the whole range is built for subscription: you pick the interval, we ship it, you save on every delivery.',
    subStatNum: '30/60/90', subStatLabel: 'Days between deliveries – your choice',
    intervalLabel: 'Deliver every', addBundle: 'Add cure',
    bundleTitle: 'Ready-made cures, shipped monthly', bundleBody: 'Three products in one combined delivery, at a discount. Swap or pause whenever.',
    madeEyebrow: 'Manufacturing', madeTitle: 'Everything is produced in Sweden', madeBody: 'We work only with Swedish suppliers and only at the highest quality. Manufacturing happens in GMP-certified facilities and every batch is third-party tested before it leaves the plant.',
    revTitle: 'What our customers say', revCount: '1,319 reviews', pdRevTitle: 'Product reviews',
    guideEyebrow: 'Guides', guideTitle: 'Read up before you start', readMore: 'Read the guide',
    backGuides: 'All guides', guideRelTitle: 'The matching product', guideMore: 'More guides',
    guideDisc: 'The guides are general information on diet and supplements and do not replace medical advice. If you are pregnant, breastfeeding or on medication, talk to your doctor first.',
    faqTitle: 'Frequently asked', faqBody: 'Cannot find the answer? Write to us – we reply the same day on weekdays.',
    shopEyebrow: 'The full range', shopTitle: 'Products', shopBody: 'Seven supplements, no filler products. All made in Sweden and third-party tested.',
    backToShop: 'Back to products',
    buyOnce: 'One-time purchase', buySub: 'Subscribe',
    shipNote: 'Free shipping over 499 kr', pauseNote: 'Pause or cancel anytime',
    thSub: 'Per daily dose', thAmt: 'Amount', thNrv: '% of NRV',
    secFacts: 'Ingredients and nutritional values', secDose: 'Dosage', secMade: 'About the manufacturing',
    madeText: 'Made in Sweden in a GMP-certified facility. Every batch is analysed by an independent laboratory before release. No unnecessary additives.',
    otherIng: 'Other ingredients: plant-based capsule (HPMC), rice hulls. Supplements should not replace a varied diet.',
    add: 'Add', addAll: 'Add all three', restart: 'Retake the quiz', back: 'Back',
    quizEyebrow: 'Find your supplement', quizResultEyebrow: 'Your result', quizResultTitle: 'This is what we would recommend',
    quizResultBody: 'Based on your answers. Add it as a subscription to save on every delivery and never think about it again.',
    cartTitle: 'Cart', cartEmpty: 'Your cart is empty.', checkoutTitle: 'Delivery details',
    fName: 'First and last name', fEmail: 'Email', fPhone: 'Phone', fAddr: 'Address', fZip: 'Postal code', fCity: 'City',
    summary: 'Summary', subtotal: 'Subtotal', subDiscount: 'Subscription discount', shipping: 'Shipping', total: 'Total', vatNote: 'Prices include VAT. Subscriptions renew automatically at your chosen interval.',
    placeOrder: 'Complete purchase', free: 'Free',
    aboutEyebrow: 'About us', aboutTitle: 'Healthified is run by enthusiasts', aboutLead: 'We started because we saw a need: families who wanted products that strengthen both mental and physical health – without hassle and without doubts about what is inside.',
    aboutCtaTitle: 'Unsure where to start?', aboutCtaBody: 'Six questions and you have a suggestion built around your routine, not around what we want to sell.',
    footTag: 'Feel well – A.L.W.A.Y.S', footBody: 'Healthified aims to be the natural choice for conscious people who see the value of feeling well.', footRights: 'All rights reserved', footDisclaimer: 'Supplements do not replace a varied diet and a healthy lifestyle.',
    toastAdded: 'Added to cart', toastOrder: 'Thank you! Your order has been received.'
  }
};

export const CATS = {
  sv: { alla: 'Alla', bas: 'Grundskydd', immun: 'Immunförsvar', skonhet: 'Skönhet', form: 'Form' },
  en: { alla: 'All', bas: 'Base', immun: 'Immunity', skonhet: 'Beauty', form: 'Shape' }
};

export const PILLARS = {
  sv: [ { num: '01', title: 'Tillverkat i Sverige', body: 'Alla produkter produceras hos svenska leverantörer.' },
        { num: '02', title: 'GMP-certifierat', body: 'Tillverkning i certifierad anläggning, med spårbarhet.' },
        { num: '03', title: 'Tredjepartstestat', body: 'Varje batch analyseras av oberoende laboratorium.' },
        { num: '04', title: '4,8 av 5', body: '1 319 omdömen från kunder som stannat kvar.' } ],
  en: [ { num: '01', title: 'Made in Sweden', body: 'All products are produced with Swedish suppliers.' },
        { num: '02', title: 'GMP-certified', body: 'Manufactured in a certified facility, fully traceable.' },
        { num: '03', title: 'Third-party tested', body: 'Every batch is analysed by an independent lab.' },
        { num: '04', title: '4.8 out of 5', body: '1,319 reviews from customers who stayed.' } ]
};

export const SUBSTEPS = {
  sv: [ { n: '1', title: 'Välj produkt eller kur', body: 'En enskild produkt eller en färdig kur med tre.' },
        { n: '2', title: 'Välj intervall', body: 'Var 30, 60 eller 90 dag – ändra när du vill.' },
        { n: '3', title: 'Vi skickar, du fortsätter', body: 'Direkt i brevlådan. Pausa eller avsluta med ett klick.' } ],
  en: [ { n: '1', title: 'Pick a product or cure', body: 'A single product or a ready-made cure of three.' },
        { n: '2', title: 'Pick your interval', body: 'Every 30, 60 or 90 days – change it whenever.' },
        { n: '3', title: 'We ship, you continue', body: 'Straight to your mailbox. Pause or cancel in one click.' } ]
};

export const REVIEWS = {
  sv: [ { quote: 'Tredje månaden på prenumerationen och jag har slutat tänka på det. Kommer när det ska.', name: 'Sara L.', meta: 'Vinterkuren · Göteborg', initials: 'SL' },
        { quote: 'Att innehållet står tydligt på varje produkt är hela anledningen att jag stannat.', name: 'Mikael R.', meta: 'Omega 3 · Stockholm', initials: 'MR' },
        { quote: 'Kundtjänsten svarade på en söndag. Det säger nog allt om hur de jobbar.', name: 'Elin H.', meta: 'Hud, hår & naglar · Malmö', initials: 'EH' } ],
  en: [ { quote: 'Third month on the subscription and I have stopped thinking about it. It just arrives.', name: 'Sara L.', meta: 'Winter Cure · Gothenburg', initials: 'SL' },
        { quote: 'Every product states exactly what is inside – that is the whole reason I stayed.', name: 'Mikael R.', meta: 'Omega 3 · Stockholm', initials: 'MR' },
        { quote: 'Support answered on a Sunday. That tells you how they work.', name: 'Elin H.', meta: 'Skin, hair & nails · Malmö', initials: 'EH' } ]
};

export const GUIDES = {
  sv: [ { id: 'g-d3', tag: 'Vitamin D', read: '6 min', rel: 'd3',
          title: 'Därför räcker inte svensk sol mellan oktober och mars',
          body: 'Solvinkeln på våra breddgrader gör att huden knappt bildar D-vitamin halva året. Så här kompenserar du.',
          lead: 'Sverige ligger mellan 55 och 69 grader nord. Det är längre norr än nästan all forskning på D-vitamin är gjord, och det märks i statistiken över hur våra nivåer ser ut i februari.',
          sections: [
            { h: 'Solvinkeln, inte solskenet, avgör', paras: [
              'D-vitamin bildas i huden när UVB-strålning träffar den. UVB har kort våglängd och filtreras bort av atmosfären när solen står lågt. Under ungefär 45 graders solhöjd kommer nästan ingen UVB ner till marken – och i Sverige når solen inte den höjden alls mellan oktober och mars.',
              'Det betyder att en klar, kall vinterdag i Stockholm kan kännas solig utan att ge dig ett enda mikrogram D-vitamin. Det är inte ljusstyrkan du märker som gör jobbet.' ] },
            { h: 'Depåerna räcker inte hela vintern', paras: [
              'Kroppen lagrar D-vitamin i fett- och muskelvävnad, och sommarens överskott bär en bit in på hösten. Halveringstiden i blodet ligger på några veckor, så för de flesta börjar nivåerna falla i november och når sin lägsta punkt i februari–mars.',
              'Just den perioden sammanfaller med förkylningssäsongen. Det är en av anledningarna till att många väljer att lägga sitt tillskott som en fast rutin i stället för att ta det när de kommer på det.' ] },
            { h: 'Vad du gör i praktiken', paras: [
              'Ta tillskottet året runt snarare än bara på vintern – nivåerna svänger mindre då. Ta det tillsammans med ett mål som innehåller fett, eftersom D-vitamin är fettlösligt och tas upp betydligt sämre på tom mage.',
              'Vill du veta var du står går det att mäta 25-OH-vitamin D via vårdcentralen. Mät i februari om du vill se din lägsta punkt, inte i augusti.' ] }
          ],
          takeTitle: 'Kort sagt',
          takes: [ 'Ingen egen D-vitaminbildning oktober–mars, oavsett väder.', 'Sommarens depåer tar slut någon gång i november.', 'Ta tillskottet med mat som innehåller fett.', 'Året runt slår säsongsvis.' ] },

        { id: 'g-3man', tag: 'Kontinuitet', read: '4 min', rel: 'hud',
          title: 'Varför tre månader är minimum för hud, hår och naglar',
          body: 'Hårstrån och nagelplattor växer långsamt. Det är därför en månads test inte säger något.',
          lead: 'Den vanligaste anledningen till att någon tycker att ett tillskott för hud, hår och naglar inte fungerar är att de utvärderade det för tidigt. Biologin sätter tidsramen, inte produkten.',
          sections: [
            { h: 'Hår växer en centimeter i månaden', paras: [
              'Ett hårstrå växer omkring 1 cm per månad, och det du ser i spegeln idag bildades i hårsäcken för veckor sedan. Näring som når hårsäcken nu syns först när det avsnittet vuxit ut ur hårbotten och en bit ner.',
              'Naglar är ännu långsammare: en nagelplatta byts ut helt på tre till sex månader. En förändring i nagelns kvalitet kan du därför tidigast bedöma efter ett kvartal.' ] },
            { h: 'Huden arbetar i cykler', paras: [
              'Överhuden förnyas i cykler på ungefär fyra veckor hos unga vuxna, längre med åldern. Två till tre fullständiga cykler är en rimlig period att bedöma på – alltså två till tre månader.' ] },
            { h: 'Så utvärderar du rättvist', paras: [
              'Bestäm en fast tidpunkt på dagen och ta tillskottet där, varje dag. Missade dagar är den enskilt största orsaken till att resultatet blir svårt att läsa.',
              'Ta ett foto vid start och ett efter tolv veckor i samma ljus. Minnet är dåligt på gradvisa förändringar, kameran är det inte.' ] }
          ],
          takeTitle: 'Kort sagt',
          takes: [ 'Hår: cirka 1 cm i månaden.', 'Naglar: 3–6 månader för en hel platta.', 'Hud: 2–3 förnyelsecykler innan bedömning.', 'Foto vid start – inte minnet.' ] },

        { id: 'g-ri', tag: 'Dosering', read: '5 min', rel: 'multivitamin',
          title: 'Vad % av RI faktiskt betyder på etiketten',
          body: 'Referensintaget är ett golv, inte ett tak. Så läser du en innehållsförteckning.',
          lead: 'RI står för referensintag och är den siffra EU bestämt ska tryckas på etiketter. Den är enklare – och grövre – än de flesta antar.',
          sections: [
            { h: 'RI är ett enda tal för alla', paras: [
              'Referensintaget är satt till en nivå som täcker behovet hos så gott som alla friska vuxna. Det är inte anpassat efter din vikt, ålder, träningsmängd eller var du bor. En och samma siffra gäller för en 19-åring i Malmö och en 65-åring i Kiruna.',
              'Därför säger 100 % av RI att intaget rimligen räcker för att undvika brist – inte att det är den optimala dosen för just dig.' ] },
            { h: 'Varför vissa ämnen ligger långt över 100 %', paras: [
              'Vattenlösliga vitaminer som C och de flesta B-vitaminer lagras dåligt och överskottet lämnar kroppen via urinen. Där är höga procentsatser normala och oproblematiska.',
              'Fettlösliga ämnen – A, D, E, K – lagras däremot. För dem finns övre gränser värda att respektera, och de anges av Livsmedelsverket. Höga tal ska alltså läsas olika beroende på vilket ämne det gäller.' ] },
            { h: 'Tre saker att titta på i stället', paras: [
              'Form: magnesiumcitrat och magnesiumoxid tas upp olika. Formen inom parentes efter ämnet säger mer än procenttalet.',
              'Dos per dagsdos, inte per kapsel. Står det "2 kapslar" i doseringen gäller tabellen båda, inte en.',
              'Vad som inte står: onödiga fyllnadsmedel, färgämnen och sötningsmedel syns i ingrediensraden under tabellen.' ] }
          ],
          takeTitle: 'Kort sagt',
          takes: [ '100 % av RI = tillräckligt för att undvika brist.', 'Höga tal är normala för C och B.', 'Fettlösliga ämnen har övre gränser.', 'Läs formen och dagsdosen, inte bara procenten.' ] } ],

  en: [ { id: 'g-d3', tag: 'Vitamin D', read: '6 min', rel: 'd3',
          title: 'Why Swedish sun is not enough from October to March',
          body: 'At our latitude the sun angle means skin barely produces vitamin D for half the year. How to compensate.',
          lead: 'Sweden sits between 55 and 69 degrees north – further north than almost all vitamin D research was conducted, and it shows in the numbers for how our levels look in February.',
          sections: [
            { h: 'Sun angle, not sunshine, decides', paras: [
              'Vitamin D forms in the skin when UVB radiation hits it. UVB has a short wavelength and is filtered out by the atmosphere when the sun sits low. Below roughly 45 degrees of solar elevation almost no UVB reaches the ground – and in Sweden the sun never reaches that height between October and March.',
              'A clear, cold winter day in Stockholm can feel sunny without giving you a single microgram of vitamin D. The brightness you notice is not what does the work.' ] },
            { h: 'Your stores do not last the winter', paras: [
              'The body stores vitamin D in fat and muscle tissue, and the summer surplus carries some way into autumn. The blood half-life is a matter of weeks, so for most people levels start falling in November and bottom out in February or March.',
              'That period coincides with cold season. It is one reason many people make the supplement a fixed routine rather than something they take when they remember.' ] },
            { h: 'What to do in practice', paras: [
              'Take it year round rather than only in winter – levels swing less that way. Take it with a meal containing fat, since vitamin D is fat soluble and absorbs considerably worse on an empty stomach.',
              'If you want to know where you stand, 25-OH vitamin D can be measured at your health centre. Measure in February to see your low point, not in August.' ] }
          ],
          takeTitle: 'In short',
          takes: [ 'No vitamin D synthesis October–March, whatever the weather.', 'Summer stores run out somewhere in November.', 'Take it with food containing fat.', 'Year round beats seasonal.' ] },

        { id: 'g-3man', tag: 'Continuity', read: '4 min', rel: 'hud',
          title: 'Why three months is the minimum for skin, hair and nails',
          body: 'Hair and nails grow slowly. That is why a one-month trial tells you nothing.',
          lead: 'The most common reason someone concludes a skin, hair and nails supplement does not work is that they judged it too early. Biology sets the timeline, not the product.',
          sections: [
            { h: 'Hair grows one centimetre a month', paras: [
              'A hair grows about 1 cm per month, and what you see in the mirror today formed in the follicle weeks ago. Nutrition reaching the follicle now only becomes visible once that segment has grown out of the scalp and some way down.',
              'Nails are slower still: a nail plate is fully replaced in three to six months. Any change in nail quality can therefore be judged after a quarter at the earliest.' ] },
            { h: 'Skin works in cycles', paras: [
              'The epidermis renews in cycles of roughly four weeks in young adults, longer with age. Two to three full cycles is a reasonable window to judge on – so two to three months.' ] },
            { h: 'How to evaluate fairly', paras: [
              'Pick a fixed time of day and take it there, every day. Missed days are the single biggest reason results become hard to read.',
              'Take one photo at the start and one after twelve weeks, in the same light. Memory is poor at gradual change; the camera is not.' ] }
          ],
          takeTitle: 'In short',
          takes: [ 'Hair: about 1 cm a month.', 'Nails: 3–6 months for a full plate.', 'Skin: 2–3 renewal cycles before judging.', 'Photo at the start – not memory.' ] },

        { id: 'g-ri', tag: 'Dosage', read: '5 min', rel: 'multivitamin',
          title: 'What % of NRV actually means on a label',
          body: 'The reference intake is a floor, not a ceiling. How to read an ingredient list.',
          lead: 'NRV stands for nutrient reference value – the number the EU requires on labels. It is simpler, and blunter, than most people assume.',
          sections: [
            { h: 'One number for everyone', paras: [
              'The reference value is set at a level that covers the needs of virtually all healthy adults. It is not adjusted for your weight, age, training load or where you live. The same figure applies to a 19-year-old in Malmö and a 65-year-old in Kiruna.',
              'So 100 % of NRV says the intake is reasonably enough to avoid deficiency – not that it is the optimal dose for you.' ] },
            { h: 'Why some nutrients sit far above 100 %', paras: [
              'Water-soluble vitamins like C and most B vitamins store poorly and the surplus leaves via urine. High percentages there are normal and unproblematic.',
              'Fat-soluble nutrients – A, D, E, K – do accumulate. For those, upper limits are worth respecting and are published by the national food agency. High numbers should be read differently depending on the nutrient.' ] },
            { h: 'Three things to look at instead', paras: [
              'Form: magnesium citrate and magnesium oxide absorb differently. The form in brackets after the nutrient tells you more than the percentage.',
              'Dose per daily serving, not per capsule. If the directions say two capsules, the table covers both, not one.',
              'What is absent: unnecessary fillers, colourings and sweeteners appear in the ingredient line below the table.' ] }
          ],
          takeTitle: 'In short',
          takes: [ '100 % of NRV = enough to avoid deficiency.', 'High numbers are normal for C and B.', 'Fat-soluble nutrients have upper limits.', 'Read the form and daily serving, not just the percentage.' ] } ]
};

export const FAQS = {
  sv: [ { q: 'Hur snabbt får jag min leverans?', a: 'Ordrar lagda före kl 12 på vardagar skickas samma dag. Normal leveranstid är 1–3 arbetsdagar och paketet går direkt i brevlådan. Fri frakt över 499 kr.' },
        { q: 'Kan jag pausa eller avsluta min prenumeration?', a: 'Ja, när som helst och utan bindningstid. Du styr intervall, byter produkt eller pausar direkt i ditt konto – ändringar gäller från nästa leverans.' },
        { q: 'Var tillverkas produkterna?', a: 'Samtliga produkter produceras i Sverige hos GMP-certifierade tillverkare. Varje batch analyseras av ett oberoende laboratorium innan den släpps.' },
        { q: 'Kan jag kombinera flera produkter?', a: 'Ja. Alla doser är satta för att fungera tillsammans i sortimentet. Är du osäker, gör quizet – det tar hänsyn till överlapp mellan produkterna.' },
        { q: 'Hur lång tid innan jag märker skillnad?', a: 'Det varierar. Vitamin D och immunstöd märks ofta inom några veckor, medan hud, hår och naglar kräver minst tre månaders kontinuerlig användning.' },
        { q: 'Vad gäller vid retur?', a: '14 dagars öppet köp på obrutna förpackningar. Kontakta oss och du får en returetikett – vi drar av returfrakten från återbetalningen.' } ],
  en: [ { q: 'How fast will my delivery arrive?', a: 'Orders placed before noon on weekdays ship the same day. Normal delivery is 1–3 working days, straight to your mailbox. Free shipping over 499 kr.' },
        { q: 'Can I pause or cancel my subscription?', a: 'Yes, anytime and with no lock-in. You control the interval, swap products or pause from your account – changes apply from the next delivery.' },
        { q: 'Where are the products manufactured?', a: 'All products are produced in Sweden by GMP-certified manufacturers. Every batch is analysed by an independent laboratory before release.' },
        { q: 'Can I combine several products?', a: 'Yes. All doses are set to work together across the range. If unsure, take the quiz – it accounts for overlap between products.' },
        { q: 'How long before I notice a difference?', a: 'It varies. Vitamin D and immune support are often noticeable within weeks, while skin, hair and nails need at least three months of consistent use.' },
        { q: 'What is your return policy?', a: '14-day returns on unopened packages. Contact us for a return label – return shipping is deducted from the refund.' } ]
};

export const VALUES = {
  sv: [ { title: 'Kontinuitet före kickar', body: 'Våra produkter ger bäst effekt när de tas regelbundet. Hela sortimentet är byggt för att bli en vana, inte en kur.' },
        { title: 'Svenska leverantörer', body: 'Vi arbetar endast med svenska leverantörer och endast med högsta kvalitet på våra produkter.' },
        { title: 'Prioriterad och informerad', body: 'Du ska känna dig prioriterad som kund och informerad om vad du stoppar i dig. Inget annat duger.' } ],
  en: [ { title: 'Continuity over quick fixes', body: 'Our products work best taken regularly. The whole range is built to become a habit, not a cure.' },
        { title: 'Swedish suppliers', body: 'We work only with Swedish suppliers and only at the highest quality.' },
        { title: 'Prioritised and informed', body: 'You should feel prioritised as a customer and informed about what you take. Nothing less will do.' } ]
};

export const ABOUT_PARAS = {
  sv: [ { text: 'Healthified startades därför att vi såg ett behov av att förse familjer med produkter som stärker såväl mental som fysisk hälsa. Vi arbetar endast med svenska leverantörer och endast med högsta kvalitet på våra produkter.' },
        { text: 'Healthified skall vara det naturliga valet för medvetna individer som ser fördelen med att må bra – A.L.L.T.I.D. Vår ambition är att alla skall nå sin potential, också när det kommer till mående.' },
        { text: 'Samtliga av våra produkter ger bäst effekt om de intas under former som inbegriper kontinuitet, och det är precis det vi strävar efter. Därför är prenumeration inte en rabattkonstruktion hos oss, utan själva poängen.' },
        { text: 'Vi välkomnar dig som kund och hoppas att vi skall få dig att känna dig prioriterad och informerad. Väl mött! — Healthified-familjen' } ],
  en: [ { text: 'Healthified started because we saw a need to supply families with products that strengthen both mental and physical health. We work only with Swedish suppliers and only at the highest quality.' },
        { text: 'Healthified aims to be the natural choice for conscious people who see the value of feeling well – A.L.W.A.Y.S. Our ambition is that everyone reaches their potential, wellbeing included.' },
        { text: 'All of our products work best when taken with continuity, and that is exactly what we aim for. Which is why subscription is not a discount mechanic here – it is the whole point.' },
        { text: 'We welcome you as a customer and hope to make you feel prioritised and informed. Well met! — The Healthified family' } ]
};

export const ACCT = {
  sv: { login: 'Logga in', logout: 'Logga ut', myAccount: 'Mitt konto',
    loginTitle: 'Logga in på ditt konto', loginLead: 'Hantera din prenumeration, se kommande leveranser och ändra dina uppgifter.',
    email: 'E-post', pass: 'Lösenord', forgot: 'Glömt lösenord?', noAcct: 'Har du inget konto?', createAcct: 'Skapa konto',
    demoNote: 'Demo – klicka Logga in för att se kontot.',
    hi: 'Hej', member: 'Medlem sedan mars 2025', tabOverview: 'Översikt', tabSub: 'Prenumeration', tabOrders: 'Ordrar', tabSettings: 'Uppgifter',
    nextDelivery: 'Nästa leverans', inDays: 'om', days: 'dagar', shipsTo: 'Skickas till', changeAddr: 'Ändra adress',
    statusActive: 'Aktiv', statusPaused: 'Pausad', statusSkipped: 'Hoppar över nästa',
    subTitle: 'Din prenumeration', every: 'Var', deliveryEvery: 'Levereras var', dayUnit: 'dag', perMonth: '/mån',
    skipNext: 'Hoppa över nästa', unskip: 'Ångra överhoppning', pause: 'Pausa', resume: 'Återuppta', deliverNow: 'Skicka nu',
    changeInterval: 'Leveransintervall', addProduct: 'Lägg till produkt', removeItem: 'Ta bort', cancelSub: 'Avsluta prenumeration',
    savedTitle: 'Du har sparat', savedBody: 'jämfört med styckpris sedan du blev medlem.', deliveriesCount: 'leveranser hittills',
    ordersTitle: 'Orderhistorik', orderNo: 'Order', track: 'Spåra paket', reorder: 'Beställ igen', invoice: 'Kvitto',
    delivered: 'Levererad', onWay: 'På väg', processing: 'Behandlas',
    settingsTitle: 'Dina uppgifter', name: 'Namn', phone: 'Telefon', address: 'Leveransadress', payment: 'Betalsätt',
    change: 'Ändra', save: 'Spara', notif: 'Aviseringar', notifMail: 'Mejl innan varje leverans', notifSms: 'SMS när paketet skickas',
    notifNews: 'Nyhetsbrev med guider', helpTitle: 'Behöver du hjälp?', helpBody: 'Vi svarar oftast inom några timmar, även på helger.',
    helpCta: 'Kontakta support', savedToast: 'Sparat', pausedToast: 'Prenumerationen är pausad', resumedToast: 'Prenumerationen är aktiv igen',
    skipToast: 'Nästa leverans hoppas över', intervalToast: 'Intervall uppdaterat' },
  en: { login: 'Log in', logout: 'Log out', myAccount: 'My account',
    loginTitle: 'Log in to your account', loginLead: 'Manage your subscription, see upcoming deliveries and update your details.',
    email: 'Email', pass: 'Password', forgot: 'Forgot password?', noAcct: 'No account yet?', createAcct: 'Create account',
    demoNote: 'Demo – click Log in to see the account.',
    hi: 'Hi', member: 'Member since March 2025', tabOverview: 'Overview', tabSub: 'Subscription', tabOrders: 'Orders', tabSettings: 'Details',
    nextDelivery: 'Next delivery', inDays: 'in', days: 'days', shipsTo: 'Ships to', changeAddr: 'Change address',
    statusActive: 'Active', statusPaused: 'Paused', statusSkipped: 'Skipping next',
    subTitle: 'Your subscription', every: 'Every', deliveryEvery: 'Delivered every', dayUnit: 'day', perMonth: '/mo',
    skipNext: 'Skip next', unskip: 'Undo skip', pause: 'Pause', resume: 'Resume', deliverNow: 'Send now',
    changeInterval: 'Delivery interval', addProduct: 'Add product', removeItem: 'Remove', cancelSub: 'Cancel subscription',
    savedTitle: 'You have saved', savedBody: 'compared to one-off prices since you joined.', deliveriesCount: 'deliveries so far',
    ordersTitle: 'Order history', orderNo: 'Order', track: 'Track parcel', reorder: 'Order again', invoice: 'Receipt',
    delivered: 'Delivered', onWay: 'On the way', processing: 'Processing',
    settingsTitle: 'Your details', name: 'Name', phone: 'Phone', address: 'Shipping address', payment: 'Payment method',
    change: 'Change', save: 'Save', notif: 'Notifications', notifMail: 'Email before each delivery', notifSms: 'SMS when the parcel ships',
    notifNews: 'Newsletter with guides', helpTitle: 'Need help?', helpBody: 'We usually reply within a few hours, weekends included.',
    helpCta: 'Contact support', savedToast: 'Saved', pausedToast: 'Subscription paused', resumedToast: 'Subscription active again',
    skipToast: 'Next delivery skipped', intervalToast: 'Interval updated' }
};

export const ORDERS = [
  { no: '10428', date: '2026-07-30', ids: ['d3', 'hud', 'omega'], total: 447, status: 'delivered' },
  { no: '10311', date: '2026-06-30', ids: ['d3', 'hud', 'omega'], total: 447, status: 'delivered' },
  { no: '10197', date: '2026-05-30', ids: ['d3', 'hud', 'omega'], total: 447, status: 'delivered' },
  { no: '10022', date: '2026-04-28', ids: ['d3', 'hud'], total: 298, status: 'delivered' }
];

// ---- Typer och konstanter (egna tillägg) -------------------------------------
export type Lang = 'sv' | 'en';
export type Product = (typeof PRODUCTS)[number];
export type Bundle = (typeof BUNDLES)[number];
export type CatKey = keyof (typeof CATS)['sv'];

export const PRICE = 199;
export const SUB_DISCOUNT = 20; // %, prototypens prop `subDiscount`
export const SUB_FACTOR = 1 - SUB_DISCOUNT / 100;
export const FREE_SHIPPING_FROM = 499;
export const SHIPPING_FEE = 49;
export const INTERVALS = [30, 60, 90] as const;
