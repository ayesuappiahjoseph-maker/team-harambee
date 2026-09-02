export default function ErrorState({ title = "Something went wrong", description, onRetry }) {
  return (
    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/40">
      <p className="font-display text-lg text-red-700 dark:text-red-300">{title}</p>
      {description && <p className="mt-2 text-sm text-red-600 dark:text-red-300/80">{description}</p>}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
