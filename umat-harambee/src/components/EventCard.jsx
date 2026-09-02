import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block overflow-hidden rounded-2xl border border-mist bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-ink-soft dark:bg-ink-soft"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">
        {event.date} · {event.time}
      </span>
      <h3 className="mt-2 font-display text-lg text-ink group-hover:text-gold-deep dark:text-paper">
        {event.title}
      </h3>
      <p className="mt-1 text-sm text-slate dark:text-paper/70">{event.venue}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate dark:text-paper/70">{event.summary}</p>
    </Link>
  );
}
