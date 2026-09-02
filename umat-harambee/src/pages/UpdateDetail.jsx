import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import EmptyState from "../components/EmptyState";
import SectionReveal from "../components/SectionReveal";
import { UPDATES } from "../data/updates";

export default function UpdateDetail() {
  const { slug } = useParams();
  const update = UPDATES.find((u) => u.slug === slug);

  if (!update) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <EmptyState
          title="Update not found"
          action={<Link to="/updates" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink">Back to Updates</Link>}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Updates", to: "/updates" }, { label: update.title }]} />
      <SectionReveal>
        <span className="rounded-full bg-gold/15 px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">
          {update.category}
        </span>
        <h1 className="mt-3 font-display text-3xl text-ink dark:text-paper">{update.title}</h1>
        <p className="mt-1 font-mono text-xs text-slate/70 dark:text-paper/50">{update.date}</p>
        <p className="mt-4 leading-relaxed text-slate dark:text-paper/75">{update.body}</p>
      </SectionReveal>
    </div>
  );
}
