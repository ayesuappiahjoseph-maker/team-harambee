import SectionReveal from "../components/SectionReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import ValueCard from "../components/ValueCard";
import { CANDIDATE } from "../data/candidate";
import { TEAM } from "../data/team";
import { VALUES } from "../data/values";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">About</span>
        <h1 className="mt-2 font-display text-4xl text-ink dark:text-paper">{CANDIDATE.name}</h1>
      </SectionReveal>

      <SectionReveal delay={100} className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-slate dark:text-paper/75">{CANDIDATE.bio}</p>
          <blockquote className="mt-8 border-l-4 border-gold pl-5 font-display text-xl italic text-ink dark:text-paper">
            “{CANDIDATE.quote}”
          </blockquote>
        </div>
        <dl className="space-y-4 rounded-2xl border border-mist bg-white p-6 text-sm dark:border-ink-soft dark:bg-ink-soft h-fit">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">Programme</dt>
            <dd className="mt-1 text-ink dark:text-paper">{CANDIDATE.programme}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">Department</dt>
            <dd className="mt-1 text-ink dark:text-paper">{CANDIDATE.department}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">Level</dt>
            <dd className="mt-1 text-ink dark:text-paper">{CANDIDATE.level}</dd>
          </div>
        </dl>
      </SectionReveal>

      <SectionReveal delay={150} className="mt-16 rounded-3xl bg-ink p-10 text-paper">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">{TEAM.name}</span>
        <h2 className="mt-2 font-display text-2xl">{TEAM.slogan}</h2>
        <p className="mt-4 max-w-2xl text-paper/70">{TEAM.meaning}</p>
        <p className="mt-4 max-w-2xl text-paper/70">{TEAM.description}</p>
      </SectionReveal>

      <div className="mt-16">
        <h2 className="mb-6 font-display text-2xl text-ink dark:text-paper">Values</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <SectionReveal key={v.id} delay={i * 60}>
              <ValueCard title={v.title} description={v.description} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
