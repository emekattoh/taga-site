import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { excoMembers } from "@/lib/data/exco";

export const metadata: Metadata = {
  title: "About — TAGA",
  description:
    "Learn about the Texas African Golf Association and meet our Executive Committee.",
};

const VALUES = [
  {
    title: "Community",
    description:
      "TAGA is a family. We show up for each other on and off the course.",
  },
  {
    title: "Fair Competition",
    description:
      "Weekly tournaments run with clear formats and honest scoring, so everyone has a real shot.",
  },
  {
    title: "Growth of the Game",
    description:
      "We welcome golfers of every skill level and help each other get better, week after week.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              About Us
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              Texas African Golf Association
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              TAGA (Texas African Golf Association) is a community of golfers
              who play weekly tournaments across Texas — built on friendly
              competition, camaraderie, and a shared love for the game.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Story"
              title="Started by golfers, for golfers"
            />
            <p className="mt-5 text-lg leading-7 text-fairway-800/80">
              TAGA came together as a group of golfers who wanted a
              consistent, well-run place to compete every week — not just a
              round with friends, but a real tournament with real stakes and
              real celebration for the winners.
            </p>
            <p className="mt-4 text-lg leading-7 text-fairway-800/80">
              What started as a small group has grown into an association
              with a full Executive Committee, a weekly tournament calendar,
              and a community that keeps coming back for more.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-fairway-100">
              <Image
                src="/images/about/group-photo.jpg"
                alt="TAGA members posing with their golf carts on the course"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-fairway-50 rounded-3xl">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our values on and off the course"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-fairway-100 bg-white p-6 text-center shadow-sm">
                <h3 className="font-display text-xl font-semibold text-fairway-950">
                  {v.title}
                </h3>
                <p className="mt-2 text-fairway-800/80">{v.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Executive Committee */}
      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="The TAGA Executive Committee"
          description="The volunteers who keep TAGA running — from planning tournaments to managing membership and dues. Photos and bios are being added — check back soon."
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
