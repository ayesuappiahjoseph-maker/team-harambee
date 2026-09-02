import Breadcrumbs from "../components/Breadcrumbs";

export default function Accessibility() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Accessibility Statement" }]} />
      <h1 className="font-display text-3xl text-ink dark:text-paper">Accessibility Statement</h1>
      <div className="mt-6 space-y-5 text-slate dark:text-paper/75">
        <p>
          This site aims to follow accessible web practices: semantic HTML,
          a logical heading hierarchy, visible keyboard focus states,
          accessible forms and menus, alt text for meaningful images, strong
          color contrast, and respect for reduced-motion preferences.
        </p>
        <p>
          If you encounter a barrier using this site, please let us know
          through the Contact page so it can be fixed.
        </p>
      </div>
    </div>
  );
}
