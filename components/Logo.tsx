// Textlogotyp med fyra färgade prickar (efter referensskärmbilderna).
// Ersätter den externa logotypen på healthified.se, som inte går att länka till.
export function Logo({ className = '' }: { className?: string }) {
  const dots = ['#F2A93B', '#E8803A', '#BDD13A', '#4FB33D'];
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Healthified">
      <span className="mb-[5px] flex gap-[3px]" aria-hidden>
        {dots.map((c) => (
          <span key={c} className="block h-[5px] w-[5px] rounded-full" style={{ background: c }} />
        ))}
      </span>
      <span className="text-[15px] font-medium uppercase tracking-[0.3em] text-ink">Healthified</span>
      <span className="mt-[3px] text-[5.5px] uppercase tracking-[0.22em] text-ink/55">Healthproducts made in Sweden</span>
    </span>
  );
}
