# Together We Move — Asoah Mensah Stanley / Team Harambee

An independent, student-focused platform for UMaT built around student
engagement, campus information, and a first-class **Campus Guide** with
Google Maps navigation. It is intentionally **not** framed as a campaign or
election website (see `src/data/config.js` and the copy throughout).

## Technology stack

- **React 19** + **Vite** (build tool)
- **React Router v7** (routing)
- **Tailwind CSS v4** (utility-first styling, CSS-variable design tokens)
- Local component state + React Context (`ThemeContext`, `FavoritesContext`)
- No backend yet — forms validate client-side and are wired to one clear
  integration point (see "Contact & forms" below)
- No Google Maps API key required for the core navigation feature

## Project structure

```
src/
  data/            # EVERYTHING editable lives here (see "Editing content")
    config.js      # site-wide flags (SHOW_PORTFOLIO, etc.)
    candidate.js    team.js    values.js    locations.js
    services.js     events.js  updates.js   gallery.js
    social.js       contact.js
  context/         # ThemeContext (dark/light), FavoritesContext (localStorage)
  utils/           # maps.js (Directions URL builder), geolocation.js, useFormSubmit.js
  components/      # Navbar, MobileMenu, BottomBar, Footer, Hero, cards,
                    # forms, NavigateButton, Gallery, Toast/Modal/Skeleton/
                    # ErrorState/EmptyState, Breadcrumbs, SectionReveal
  pages/           # Home, About, Events(+detail), Updates(+detail),
                    # Gallery, Contact, Privacy, Terms, Accessibility, 404
    campus-guide/  # CampusGuideIndex, HostelDirectory, LocationDetail
  App.jsx          # Route table
  main.jsx         # Providers + router mount
```

## Installation

Requires Node.js 18+.

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the app with hot reload at the printed local URL (typically
`http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

Build output goes to `dist/`. Deploy `dist/` to any static host (Vercel,
Netlify, GitHub Pages, etc.) — this is a client-only SPA.

If you deploy to a static host that doesn't rewrite unknown paths to
`index.html`, configure that host's SPA fallback so routes like
`/campus-guide/location/some-slug` don't 404 on a hard refresh.

## Linting

```bash
npm run lint
```

## Environment variables

See `.env.example`. The core "Navigate with Google Maps" feature needs
**no API key** — it builds a public `https://www.google.com/maps/dir/?...`
URL and opens it. `VITE_GOOGLE_MAPS_API_KEY` is only a placeholder for if
you later add an *embedded, interactive* map component.

## How Google Maps navigation works

1. A student opens a location's detail page and taps **Navigate with Google
   Maps** (`src/components/NavigateButton.jsx`).
2. The button explains why location access is being requested, then asks the
   browser for permission (`src/utils/geolocation.js`).
3. If granted, the student's current coordinates become the **origin**; the
   selected location becomes the **destination** (its verified coordinates,
   or its name/address if coordinates aren't verified yet).
4. `src/utils/maps.js` builds a standard Google Maps Directions URL and opens
   it in a new tab — the operating system/browser decides whether that opens
   the Google Maps app or the web version.
5. If permission is denied, unavailable, or times out, the UI shows a
   fallback with **Open Google Maps** (Google can use its own location once
   it opens), **Copy Location**, **Try Again**, and **Share Location**.

The student's coordinates are only ever used in-browser, to build that one
URL. They are never stored or sent to a server.

## Editing candidate & team information

Edit `src/data/candidate.js` and `src/data/team.js`. Replace every
`[PLACEHOLDER]` with verified information — nothing is invented for you.

## Editing hostels & campus locations

Everything lives in `src/data/locations.js`. Each entry follows:

```js
{
  id, name, slug, category, description, address, image,
  coordinates: { lat, lng } | null,
  coordinatesVerified: boolean,
  nearbyLandmarks: string[],
}
```

**Coordinates are `null`/unverified by default.** Public sources confirm
official UMaT hall names (Chamber of Mines Hall, Gold Refinery Hall, K.T.
Hall, Campus Hostel/SRID) but not individually verified GPS pins, and
sources disagree on the exact current count/status of halls — so this file
deliberately does not guess. Drop in verified coordinates from Google Maps
once you have them and flip `coordinatesVerified: true`; until then, the UI
clearly labels the entry as "Coordinates unverified" and Google Maps will
still navigate by name/address. Add private hostels the same way, sourced
from UMaT's Academic and Students Affairs Unit rather than guessed.

## Adding events & updates

Add objects to `src/data/events.js` / `src/data/updates.js`. Each needs a
unique `slug` (used in the URL) — the list and detail pages pick these up
automatically.

## Replacing images

Search any data file for a `[PLACEHOLDER]`-style image value (e.g.
`"[CANDIDATE PHOTO]"`, `"[LOCATION IMAGE]"`, `"[GALLERY IMAGE]"`) and replace
it with a real path (e.g. `/images/stanley-portrait.jpg` after adding the
file to `public/images/`). Components already handle both the placeholder
state and a real image path.

## Contact & forms

`ContactForm.jsx`, `FeedbackForm.jsx`, and `AskAsoahForm.jsx` validate input
client-side and currently log to the console instead of sending anywhere —
there is no backend connected. Each has one clear function
(`fakeSubmit`) to replace with a real API call, email service (e.g.
Formspree, Resend, a small serverless function), or your own backend. Do
this before relying on these forms in production; right now, submitting a
form never claims a message was actually delivered anywhere beyond this app.

## SHOW_PORTFOLIO flag

`src/data/config.js` exports `SHOW_PORTFOLIO: false`. No portfolio route,
link, or reference exists anywhere in the public site yet. When you're ready
to publish one, add a route/page and flip the flag — nothing needs to be
un-hidden elsewhere first.

## Deployment

Any static host works (this is a Vite SPA):

- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`, and add a SPA rewrite (`/* -> /index.html`) so
  client-side routes resolve on refresh.
- **GitHub Pages**: build `dist/` and publish it, using a router
  basename/hash-router if hosted under a subpath.

## Remaining limitations

- **No backend**: contact/feedback/question forms don't send anywhere yet
  (see "Contact & forms" above).
- **Hostel/location coordinates are unverified placeholders.** Only names of
  official halls are confirmed from public UMaT sources; addresses and pins
  need on-the-ground verification before this is a reliable navigation tool.
- **No real images, events, updates, or gallery photos** — all placeholders.
- **Ask Asoah / Feedback have no real answers or moderation queue** — that's
  a deliberate choice (no fabricated Q&A), but means the feature is
  presentation-only until a review workflow is built.
- **No automated test suite** — `npm run build` and `npm run lint` both pass
  cleanly, but there are no unit/e2e tests yet.
