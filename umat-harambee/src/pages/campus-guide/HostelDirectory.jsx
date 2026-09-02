import { useMemo, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import LocationCard from "../../components/LocationCard";
import EmptyState from "../../components/EmptyState";
import SectionReveal from "../../components/SectionReveal";
import { HOSTELS } from "../../data/locations";

export default function HostelDirectory() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HOSTELS;
    return HOSTELS.filter(
      (h) => h.name.toLowerCase().includes(q) || h.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Campus Guide", to: "/campus-guide" }, { label: "Hostels" }]}
      />

      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">Hostel Directory</h1>
        <p className="mt-3 max-w-2xl text-slate dark:text-paper/70">
          Official halls of residence and hostel entries. Coordinates marked
          "unverified" haven't been confirmed yet — Google Maps will still search by name.
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
            placeholder='Search "hostel", a specific name, or a nearby location'
            aria-label="Search hostels"
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
      </SectionReveal>

      <div className="mt-10">
        {results.length === 0 ? (
          <EmptyState title="No hostels match your search" description="Try a different name." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((h, i) => (
              <SectionReveal key={h.id} delay={Math.min(i, 6) * 50}>
                <LocationCard location={h} />
              </SectionReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
