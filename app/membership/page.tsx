import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Membership Login — TAGA",
  description: "TAGA member login — coming soon.",
};

export default function MembershipPage() {
  return (
    <div className="bg-fairway-950 min-h-[70vh] flex items-center">
      <Section className="w-full">
        <FadeIn>
          <div className="mx-auto max-w-md rounded-3xl border border-fairway-800 bg-fairway-900 p-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/10 text-3xl ring-2 ring-gold-400">
              🔒
            </span>
            <h1 className="font-display mt-5 text-2xl font-semibold text-fairway-50">
              Member Login
            </h1>
            <p className="mt-3 text-fairway-300">
              Member accounts are coming soon. Once live, you&rsquo;ll be
              able to log in here to manage your TAGA profile, register for
              tournaments, and handle payments online.
            </p>

            <div className="mt-6 space-y-3 text-left opacity-50">
              <div>
                <label className="block text-xs font-medium text-fairway-400">
                  Email
                </label>
                <div className="mt-1 h-11 rounded-lg border border-fairway-700 bg-fairway-950" />
              </div>
              <div>
                <label className="block text-xs font-medium text-fairway-400">
                  Password
                </label>
                <div className="mt-1 h-11 rounded-lg border border-fairway-700 bg-fairway-950" />
              </div>
              <div className="h-11 rounded-lg bg-gold-400/40" />
            </div>

            <p className="mt-6 text-sm text-fairway-400">
              Not a member yet?{" "}
              <Link href="/contact" className="font-semibold text-gold-300 hover:underline">
                Get in touch
              </Link>{" "}
              to join TAGA.
            </p>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
