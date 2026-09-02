import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import UpdateCard from "../components/UpdateCard";
import EmptyState from "../components/EmptyState";
import SectionReveal from "../components/SectionReveal";
import { UPDATES, UPDATE_CATEGORIES } from "../data/updates";

export default function Updates() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? UPDATES : UPDATES.filter((u) => u.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Updates" }]} />
      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">Updates</h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {["All", ...UPDATE_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "border-gold bg-gold text-ink"
                  : "border-mist text-slate hover:border-ink dark:border-ink-soft dark:text-paper/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionReveal>
      <div className="mt-10">
        {items.length === 0 ? (
          <EmptyState title="No updates in this category" />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((u, i) => (
              <SectionReveal key={u.id} delay={i * 60}>
                <UpdateCard update={u} />
              </SectionReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
