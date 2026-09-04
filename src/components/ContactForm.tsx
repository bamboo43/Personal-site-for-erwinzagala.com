"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      name ? `Message from ${name} via erwinzagala.com` : "Message via erwinzagala.com",
    );
    const body = encodeURIComponent(
      `Name: ${name || "(not provided)"}\nEmail: ${email || "(not provided)"}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-blue-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-blue-400"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-blue-400"
          placeholder="How can I help?"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Open email draft
        </button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Or email {siteConfig.email} directly
        </a>
      </div>
      {status === "sent" && (
        <p className="text-sm text-slate-600 dark:text-slate-400" role="status">
          Your mail client should open with a pre-filled message. If nothing happened, email{" "}
          <a className="underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
