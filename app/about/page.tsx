import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About — TAGA",
  description: "Learn about the Texas African Golf Association.",
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
            <div className="aspect-[4/3] w-full rounded-3xl bg-fairway-100 flex items-center justify-center text-fairway-400">
              <span className="text-sm">Add a group photo here</span>
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
    </>
  );
}
