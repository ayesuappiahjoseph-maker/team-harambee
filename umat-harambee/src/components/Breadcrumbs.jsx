import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate dark:text-paper/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className="link-sweep">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-ink dark:text-paper">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
