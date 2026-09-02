import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "", withLabel = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center gap-3 ${withLabel ? "w-full justify-between rounded-full border border-mist px-4 py-2.5 dark:border-paper/20" : ""} ${className}`}
    >
      {withLabel && (
        <span className="text-sm font-medium text-ink dark:text-paper">
          {isDark ? "Dark mode" : "Light mode"}
        </span>
      )}
      <span
        className="relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border-2 border-ink dark:border-paper bg-paper-dim dark:bg-ink-soft transition-colors"
        aria-hidden="true"
      >
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink text-xs shadow transition-transform duration-300 ${
            isDark ? "translate-x-7" : "translate-x-0.5"
          }`}
        >
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
    </button>
  );
}
