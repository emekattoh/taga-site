import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { WinnerPodium } from "@/components/winner-podium";
import { tournaments, getAllFirstPlaceWinners } from "@/lib/data/tournaments";

export const metadata: Metadata = {
  title: "Tournaments — TAGA",
  description:
    "TAGA weekly tournament results, photos, and our Hall of Fame of past winners.",
};

export default function TournamentsPage() {
  const hallOfFame = getAllFirstPlaceWinners();

  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              On The Course
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              Weekly Tournaments &amp; Hall of Fame
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              Every week TAGA members compete for the podium. Here&rsquo;s
              the latest action, photos from the course, and our running
              Hall of Fame of tournament winners.
            </p>
          </FadeIn>
        </Section>
      </div>

      {/* Tournament results */}
      {tournaments.map((t, idx) => (
        <Section key={t.id} className={idx > 0 ? "border-t border-fairway-100" : ""}>
          <SectionHeading
            eyebrow={t.date}
            title={t.title}
            description={`${t.course}${t.summary ? " — " + t.summary : ""}`}
          />

          <div className="mt-12">
            <WinnerPodium winners={t.winners} />
          </div>

          {t.gallery && t.gallery.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {t.gallery.map((src, i) => (
                <FadeIn key={src} delay={i * 0.05}>
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-fairway-100">
                    <Image
                      src={src}
                      alt={`${t.title} photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-fairway-200 bg-fairway-50 p-10 text-center text-sm text-fairway-700/70">
              Photos from this tournament will be added soon. Drop images
              into{" "}
              <code className="rounded bg-white px-1.5 py-0.5">
                /public/images/tournaments/
              </code>{" "}
              and reference them in{" "}
              <code className="rounded bg-white px-1.5 py-0.5">
                lib/data/tournaments.ts
              </code>
              .
            </div>
          )}
        </Section>
      ))}

      {/* Hall of Fame */}
      <Section className="bg-fairway-950 rounded-3xl">
        <SectionHeading
          eyebrow="Hall of Fame"
          title="Our Champions"
          description="A running list of every weekly tournament's top finisher — updated as new champions are crowned."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hallOfFame.map((entry, i) => (
            <FadeIn key={entry.tournamentTitle + entry.date} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl bg-fairway-900 p-5">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-2xl ring-2 ring-gold-400">
                  {entry.winner.photo ? (
                    <Image
                      src={entry.winner.photo}
                      alt={entry.winner.name}
                      fill
                      sizes="56px"
                      className="rounded-full object-cover"
                    />
                  ) : (
                    "🏆"
                  )}
                </div>
                <div>
                  <p className="font-display font-semibold text-fairway-50">
                    {entry.winner.name}
                  </p>
                  <p className="text-sm text-fairway-300">
                    {entry.tournamentTitle} · {entry.date}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
