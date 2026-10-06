import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { getUpcomingTournament, getCourseMapUrl } from "@/lib/data/tournaments";

const HIGHLIGHTS = [
  {
    title: "Weekly Tournaments",
    description:
      "Join fellow members every week for friendly, competitive rounds across Texas courses.",
    icon: "⛳",
  },
  {
    title: "Community First",
    description:
      "TAGA is built by golfers, for golfers — a welcoming community that celebrates every round.",
    icon: "🤝",
  },
  {
    title: "Celebrate the Winners",
    description:
      "Every tournament's top finishers get their moment in our Hall of Fame — with photos and bragging rights.",
    icon: "🏆",
  },
];

export default function Home() {
  const upcoming = getUpcomingTournament();

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-fairway-950">
        <div className="bg-dot-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <FadeIn>
            <Eyebrow>Texas African Golf Association</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-display max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fairway-50 sm:text-6xl">
              Golf, community, and{" "}
              <span className="text-gold-300">weekly wins</span> — that&rsquo;s TAGA.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-7 text-fairway-200">
              TAGA brings together golfers from across Texas for weekly
              tournaments, friendly competition, and a community that loves
              the game as much as you do.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/tournaments"
                className="rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-fairway-950 transition-colors hover:bg-gold-300"
              >
                See Tournament Highlights
              </Link>
              <Link
                href="/membership"
                className="rounded-full border border-fairway-700 px-6 py-3 text-sm font-semibold text-fairway-50 transition-colors hover:bg-fairway-900"
              >
                Join TAGA
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Highlights */}
      <Section>
        <SectionHeading
          eyebrow="Why TAGA"
          title="A golf association built around community"
          description="Whether you're chasing a low score or just love the walk, TAGA is your weekly tee time with people who get it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-fairway-100 bg-white p-6 shadow-sm">
                <span className="text-3xl">{h.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-fairway-950">
                  {h.title}
                </h3>
                <p className="mt-2 text-fairway-800/80">{h.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Upcoming tournament teaser */}
      {upcoming && (
        <Section className="bg-fairway-50 rounded-3xl">
          <SectionHeading
            eyebrow={upcoming.displayDate}
            title={upcoming.title}
            description={upcoming.summary}
            align="center"
          />
          <FadeIn delay={0.05}>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-fairway-100 bg-white p-6 text-center shadow-sm">
              <p className="font-display text-lg font-semibold text-fairway-950">
                {upcoming.course.name}
              </p>
              <p className="text-fairway-800/80">{upcoming.course.address}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  href="/tournaments"
                  className="rounded-full bg-fairway-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fairway-600"
                >
                  Tournament Details
                </Link>
                <a
                  href={getCourseMapUrl(upcoming.course)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-fairway-200 px-6 py-3 text-sm font-semibold text-fairway-800 transition-colors hover:bg-fairway-50"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* CTA band */}
      <Section className="text-center">
        <div className="rounded-3xl bg-fairway-900 px-8 py-14">
          <h2 className="font-display text-balance text-3xl font-semibold text-fairway-50 sm:text-4xl">
            Ready to tee it up with TAGA?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fairway-200">
            Membership sign-up and online payments are coming soon. Follow
            us on Instagram so you never miss a tournament announcement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/social"
              className="rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-fairway-950 transition-colors hover:bg-gold-300"
            >
              Follow Us on Instagram
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-fairway-700 px-6 py-3 text-sm font-semibold text-fairway-50 transition-colors hover:bg-fairway-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
