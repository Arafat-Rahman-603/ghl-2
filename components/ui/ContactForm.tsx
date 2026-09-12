"use client";

import { useState } from "react";
import { site } from "@/lib/content/site";

type FormState = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  "GoHighLevel Setup",
  "GoHighLevel Automation",
  "CRM Setup",
  "Funnel Development",
  "Integrations",
  "Not sure yet",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const e: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    if (!name?.trim()) e.name = "Name is required.";
    if (!email?.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = "A valid email is required.";
    if (!message?.trim()) e.message = "Please describe your project.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setState("loading");

    // TODO: Replace with actual form submission endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="card card-padded text-center py-12">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-ink-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-sm font-bold text-ink-900 mb-2">Message received</h2>
        <p className="text-body text-gray-500">
          We&apos;ll review your inquiry and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink-900 mb-1.5">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-ink-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 transition-colors ${errors.name ? "border-red-400" : "border-gray-200"}`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink-900 mb-1.5">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-ink-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 transition-colors ${errors.email ? "border-red-400" : "border-gray-200"}`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-ink-900 mb-1.5">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink-900 mb-1.5">
          Project details <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-ink-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors ${errors.message ? "border-red-400" : "border-gray-200"}`}
          placeholder="Tell us about your business and what you're trying to build or fix..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-red-500">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-primary btn-lg w-full justify-center"
        aria-disabled={state === "loading"}
      >
        {state === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : "Send message"}
      </button>
    </form>
  );
}
