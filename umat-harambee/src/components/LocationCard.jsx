import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function LocationCard({ location }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(location.slug);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-mist bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-ink-soft dark:bg-ink-soft">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim dark:bg-ink">
        {location.image && !location.image.startsWith("[") ? (
          <img
            src={location.image}
            alt={location.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate/60">
            Image placeholder
          </div>
        )}
        <button
          type="button"
          onClick={() => toggleFavorite(location.slug)}
          aria-pressed={fav}
          aria-label={fav ? `Remove ${location.name} from favorites` : `Save ${location.name} to favorites`}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow dark:bg-ink/80"
        >
          {fav ? "★" : "☆"}
        </button>
        {!location.coordinatesVerified && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-gold">
            Coordinates unverified
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[11px] uppercase tracking-widest text-gold-deep dark:text-gold">
          {location.category}
        </span>
        <h3 className="mt-1 font-display text-lg text-ink dark:text-paper">{location.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate dark:text-paper/70">
          {location.description}
        </p>
        <Link
          to={`/campus-guide/location/${location.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink link-sweep dark:text-paper"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
