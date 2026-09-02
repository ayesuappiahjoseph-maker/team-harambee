export default function PriorityCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-ink p-6 text-paper transition-transform hover:-translate-y-1">
      <h3 className="font-display text-lg text-gold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-paper/75">{description}</p>
    </div>
  );
}
