import Breadcrumbs from "../components/Breadcrumbs";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 prose-p:leading-relaxed">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="font-display text-3xl text-ink dark:text-paper">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-slate dark:text-paper/75">
        <p>
          This is an independent, student-focused platform. It is not an
          official University of Mines and Technology (UMaT) website.
        </p>
        <section>
          <h2 className="font-display text-lg text-ink dark:text-paper">Contact forms</h2>
          <p>
            Contact, feedback and question forms on this site collect only
            what you choose to enter (name, email, programme, and your
            message). An anonymous option is available on the feedback and
            question forms. Submissions are not automatically published.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg text-ink dark:text-paper">Geolocation</h2>
          <p>
            The Campus Guide's "Navigate with Google Maps" feature asks your
            browser for permission to use your current location. That
            location is used only in your browser to build a Google Maps
            directions link — it is not stored, logged, or sent to any
            server operated by this site. You can decline the request and
            still get directions via Google Maps' own location handling.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg text-ink dark:text-paper">Google Maps</h2>
          <p>
            "Navigate with Google Maps" opens Google's own website or app to
            handle directions and turn-by-turn navigation. Google's use of
            data is governed by Google's own privacy policy, not this one.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg text-ink dark:text-paper">Local device storage</h2>
          <p>
            Favorites and recently viewed locations are stored locally in
            your browser only, so this site can work without requiring you
            to log in. This data is not sent to a server.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg text-ink dark:text-paper">Cookies & analytics</h2>
          <p>
            This site does not currently use cookies or analytics. If that
            changes, this policy will be updated to reflect exactly what is
            collected and why.
          </p>
        </section>
      </div>
    </div>
  );
}
