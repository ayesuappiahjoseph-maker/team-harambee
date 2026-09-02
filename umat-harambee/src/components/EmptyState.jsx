export default function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-2xl border border-dashed border-mist p-10 text-center dark:border-ink-soft">
      <p className="font-display text-lg text-ink dark:text-paper">{title}</p>
      {description && <p className="mt-2 text-sm text-slate dark:text-paper/70">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
