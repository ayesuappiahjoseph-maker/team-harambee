import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import EmptyState from "../components/EmptyState";
import SectionReveal from "../components/SectionReveal";
import { EVENTS } from "../data/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <EmptyState
          title="Event not found"
          action={<Link to="/events" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink">Back to Events</Link>}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Events", to: "/events" }, { label: event.title }]} />
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">
          {event.date} · {event.time} · {event.venue}
        </span>
        <h1 className="mt-2 font-display text-3xl text-ink dark:text-paper">{event.title}</h1>
        <p className="mt-4 leading-relaxed text-slate dark:text-paper/75">{event.body}</p>
      </SectionReveal>
    </div>
  );
}
