import Breadcrumbs from "../components/Breadcrumbs";

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <h1 className="font-display text-3xl text-ink dark:text-paper">Terms</h1>
      <div className="mt-6 space-y-5 text-slate dark:text-paper/75">
        <p>
          This platform is provided as an independent, student-focused
          resource associated with Asoah Mensah Stanley and Team Harambee. It
          is not an official University of Mines and Technology website.
        </p>
        <p>
          Campus Guide information (locations, hostels, services) is provided
          for general orientation. Where coordinates or details are marked as
          unverified, confirm current information with the relevant UMaT
          office before relying on it.
        </p>
        <p>
          Content submitted through feedback, question, or contact forms is
          reviewed before any public use and is not published automatically.
        </p>
      </div>
    </div>
  );
}
