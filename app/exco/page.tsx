import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { excoMembers } from "@/lib/data/exco";

export const metadata: Metadata = {
  title: "Executive Committee — TAGA",
  description: "Meet the Executive Committee leading TAGA.",
};

export default function ExcoPage() {
  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Leadership
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              The TAGA Executive Committee
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              The volunteers who keep TAGA running — from planning weekly
              tournaments to managing membership and dues.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section>
        <SectionHeading
          title="Meet the Committee"
          description="Photos and bios are being added — check back soon, or reach out if you'd like to help fill these in."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excoMembers.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-fairway-100 bg-white p-6 shadow-sm">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-fairway-100 ring-4 ring-fairway-50">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-fairway-400">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="font-display text-lg font-semibold text-fairway-950">
                    {member.name}
                  </p>
                  <p className="text-sm font-semibold text-gold-600">
                    {member.role}
                  </p>
                  {member.handicap && (
                    <p className="mt-1 text-xs text-fairway-700/60">
                      Handicap: {member.handicap}
                    </p>
                  )}
                </div>
                <p className="mt-4 text-center text-sm leading-6 text-fairway-800/80">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
