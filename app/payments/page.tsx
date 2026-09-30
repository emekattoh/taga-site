import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Payments — TAGA",
  description: "TAGA dues and tournament fee payments — coming soon.",
};

const PLANNED = [
  {
    title: "Annual Membership Dues",
    description: "Pay your yearly TAGA membership online, securely.",
  },
  {
    title: "Weekly Tournament Fees",
    description: "Cover your buy-in for upcoming weekly tournaments.",
  },
  {
    title: "Payment History",
    description: "View your past payments and receipts in one place.",
  },
];

export default function PaymentsPage() {
  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Coming Soon
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              Payments &amp; Dues
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fairway-200">
              We&rsquo;re building a secure online payment system for TAGA
              membership dues and tournament fees. Until then, please reach
              out to the Treasurer for payment options.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section>
        <SectionHeading title="What's coming" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PLANNED.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-fairway-100 bg-white p-6 text-center shadow-sm">
                <h3 className="font-display text-xl font-semibold text-fairway-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-fairway-800/80">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="rounded-full bg-fairway-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fairway-600"
          >
            Contact the Treasurer
          </Link>
        </div>
      </Section>
    </>
  );
}
