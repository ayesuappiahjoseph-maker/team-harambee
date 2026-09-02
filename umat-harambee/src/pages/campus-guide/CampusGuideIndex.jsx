import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import LocationCard from "../../components/LocationCard";
import EmptyState from "../../components/EmptyState";
import SectionReveal from "../../components/SectionReveal";
import { CATEGORIES, searchLocations } from "../../data/locations";

export default function CampusGuideIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const results = useMemo(() => searchLocations(query, category), [query, category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Campus Guide" }]} />

      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">Campus Guide</h1>
        <p className="mt-3 max-w-2xl text-slate dark:text-paper/70">
          Search hostels, departments, laboratories, libraries and other
          important UMaT locations, then get walking directions with Google Maps.
        </p>
      </SectionReveal>

      <SectionReveal delay={100} className="mt-8">
        <div className="relative">
          <input
            type="text"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where are you going?"
            aria-label="Search campus locations"
            className="w-full rounded-full border-2 border-mist bg-white px-6 py-4 text-lg outline-none transition-colors focus:border-gold dark:border-ink-soft dark:bg-ink-soft"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate hover:text-ink dark:text-paper/60 dark:hover:text-paper"
            >
              ✕
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={category === c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c.id
                  ? "border-gold bg-gold text-ink"
                  : "border-mist text-slate hover:border-ink dark:border-ink-soft dark:text-paper/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </SectionReveal>

      <div className="mt-10">
        {results.length === 0 ? (
          <EmptyState
            title="No locations match your search"
            description="Try a different name, or clear the filters to see everything."
            action={
              <button
                type="button"
                onClick={() => { setQuery(""); setCategory("all"); }}
                className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper dark:bg-gold dark:text-ink"
              >
                Clear search
              </button>
            }
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((loc, i) => (
              <SectionReveal key={loc.id} delay={Math.min(i, 6) * 50}>
                <LocationCard location={loc} />
              </SectionReveal>
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <Link to="/campus-guide/hostels" className="link-sweep font-semibold text-ink dark:text-paper">
          Browse the full Hostel Directory →
        </Link>
      </div>
    </div>
  );
}
