import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    ref.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4 animate-reveal"
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-ink-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg text-ink dark:text-paper">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-8 w-8 place-items-center rounded-full hover:bg-paper-dim dark:hover:bg-ink"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
