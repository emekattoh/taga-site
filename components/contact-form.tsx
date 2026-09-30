"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: wire up to a real endpoint (e.g. /api/contact -> email service)
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-fairway-100 bg-fairway-50 p-8 text-center">
        <p className="font-display text-lg font-semibold text-fairway-950">
          Message sent! 🏌️
        </p>
        <p className="mt-2 text-fairway-800/80">
          Thanks for reaching out — TAGA will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-fairway-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-fairway-200 px-4 py-2.5 text-fairway-950 focus:border-fairway-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-fairway-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-fairway-200 px-4 py-2.5 text-fairway-950 focus:border-fairway-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fairway-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-fairway-200 px-4 py-2.5 text-fairway-950 focus:border-fairway-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-fairway-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fairway-600 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
