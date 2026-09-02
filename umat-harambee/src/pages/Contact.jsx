import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import TiktokButton from "../components/TiktokButton";
import SectionReveal from "../components/SectionReveal";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">Get in Touch</h1>
        <p className="mt-3 max-w-xl text-slate dark:text-paper/70">
          Questions, ideas or feedback, reach out below or on WhatsApp.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <SectionReveal className="rounded-2xl border border-mist bg-white p-6 dark:border-ink-soft dark:bg-ink-soft">
          <ContactForm />
        </SectionReveal>
        <SectionReveal delay={100} className="flex flex-wrap items-start gap-3">
          <WhatsAppButton />
          <TiktokButton />
        </SectionReveal>
      </div>
    </div>
  );
}
