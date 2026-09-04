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
    <Container className="py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        Let&apos;s talk.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
        For speaking, collaborations, media, or general inquiries, use the form below or email{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
        >
          {siteConfig.email}
        </a>
        . For legal representation through Legal Access, mention that in your note so we can
        route you properly.
      </p>

      <div className="mt-10 max-w-xl rounded-2xl border border-stone-200/80 bg-white/80 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900/50 sm:p-8">
        <ContactForm />
      </div>
    </Container>
  );
}
