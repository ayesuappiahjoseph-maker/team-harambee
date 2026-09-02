import Breadcrumbs from "../components/Breadcrumbs";
import EventCard from "../components/EventCard";
import EmptyState from "../components/EmptyState";
import SectionReveal from "../components/SectionReveal";
import { EVENTS } from "../data/events";

export default function Events() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Events" }]} />
      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">
          We've Got Some Great Events Lined Up
        </h1>
        <p className="mt-3 max-w-2xl text-slate dark:text-paper/70">
          From workshops and socials to campus-wide celebrations, there's always
          something happening. Take a look and come join us.
        </p>
      </SectionReveal>
      <div className="mt-10">
        {EVENTS.length === 0 ? (
          <EmptyState
            title="Nothing on the calendar just yet"
            description="We're cooking up something good — check back soon."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {EVENTS.map((e, i) => (
              <SectionReveal key={e.id} delay={i * 60}>
                <EventCard event={e} />
              </SectionReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}