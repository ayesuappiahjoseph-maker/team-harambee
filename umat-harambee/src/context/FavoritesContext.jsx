import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);
const FAV_KEY = "harambee-favorites";
const RECENT_KEY = "harambee-recent-locations";

function readList(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => readList(FAV_KEY));
  const [recent, setRecent] = useState(() => readList(RECENT_KEY));

  useEffect(() => {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch {
      /* local-only feature; safe to ignore if storage is unavailable */
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    } catch {
      /* local-only feature; safe to ignore if storage is unavailable */
    }
  }, [recent]);

  const toggleFavorite = (slug) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isFavorite = (slug) => favorites.includes(slug);

  const addRecent = (slug) => {
    setRecent((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 8));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, recent, addRecent }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
