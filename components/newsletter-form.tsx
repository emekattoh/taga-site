"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // TODO: wire up to a real newsletter provider / API route once ready
    // (e.g. POST to /api/newsletter which forwards to Mailchimp/Resend/etc.)
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-fairway-900 p-6 text-center">
        <p className="font-display text-lg font-semibold text-gold-300">
          You&rsquo;re on the list! ⛳
        </p>
        <p className="mt-2 text-sm text-fairway-200">
          Thanks for signing up — we&rsquo;ll let you know as soon as the
          newsletter launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@email.com"
          className="w-full rounded-full border border-fairway-700 bg-fairway-900 px-5 py-3 text-fairway-50 placeholder:text-fairway-400 focus:border-gold-400 focus:outline-none"
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-fairway-950 transition-colors hover:bg-gold-300 disabled:opacity-70"
      >
        {status === "submitting" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p id="newsletter-error" className="text-sm text-red-300 sm:hidden">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
