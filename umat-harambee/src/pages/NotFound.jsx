import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="font-mono text-6xl text-gold">404</span>
      <h1 className="mt-4 font-display text-3xl text-ink dark:text-paper">Page not found</h1>
      <p className="mt-2 text-slate dark:text-paper/70">
        This page doesn't exist, or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Back Home</Link>
        <Link to="/about" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink dark:border-paper dark:text-paper">Explore UMaT Campus</Link>
        <Link to="/campus-guide" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink dark:border-paper dark:text-paper">Find a Location</Link>
      </div>
    </div>
  );
}
