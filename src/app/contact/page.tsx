import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Erwin Zagala at ${siteConfig.email}.`,
  openGraph: {
    title: `Contact · ${siteConfig.name}`,
    description: `Email ${siteConfig.email} or send a message via the contact form.`,
  },
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
        Say hello.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
        For speaking, collaborations, media, or general inquiries, use the form below or email{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400"
        >
          {siteConfig.email}
        </a>
        . For legal representation through Legal Access, mention that in your note so we can
        route you properly.
      </p>

      <div className="mt-10 max-w-xl rounded-2xl border border-slate-200/80 bg-white/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
        <ContactForm />
      </div>
    </Container>
  );
}
