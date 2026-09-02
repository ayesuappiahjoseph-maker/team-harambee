export default function ValueCard({ title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-mist bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-ink-soft dark:bg-ink-soft">
      <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      <h3 className="font-display text-lg text-ink dark:text-paper">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate dark:text-paper/70">{description}</p>
    </div>
  );
}
