import { useEffect } from "react";

export default function Toast({ message, tone = "success", onDismiss }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const toneClass =
    tone === "error"
      ? "border-red-500/40 bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-200"
      : "border-gold/50 bg-gold-soft/60 text-ink dark:bg-ink-soft dark:text-paper";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-24 left-1/2 z-50 w-[92%] max-w-sm -translate-x-1/2 rounded-xl border px-4 py-3 text-sm shadow-lg animate-reveal lg:bottom-6 ${toneClass}`}
    >
      {message}
    </div>
  );
}
