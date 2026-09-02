import { Link } from "react-router-dom";

export default function UpdateCard({ update }) {
  return (
    <Link
      to={`/updates/${update.slug}`}
      className="group block overflow-hidden rounded-2xl border border-mist bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-ink-soft dark:bg-ink-soft"
    >
      <span className="rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-gold-deep dark:text-gold">
        {update.category}
      </span>
      <h3 className="mt-3 font-display text-lg text-ink group-hover:text-gold-deep dark:text-paper">
        {update.title}
      </h3>
      <p className="mt-1 font-mono text-xs text-slate/70 dark:text-paper/50">{update.date}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate dark:text-paper/70">{update.summary}</p>
    </Link>
  );
}
