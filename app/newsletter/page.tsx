import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter — TAGA",
  description: "Sign up for the TAGA newsletter for tournament updates.",
};

export default function NewsletterPage() {
  return (
    <div className="bg-fairway-950">
      <Section className="text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            Stay In The Loop
          </p>
          <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
            TAGA Newsletter
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fairway-200">
            Get weekly tournament results, upcoming schedules, and TAGA news
            straight to your inbox. Sign up below to be first on the list —
            full newsletter delivery is launching soon.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-10 max-w-md">
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
