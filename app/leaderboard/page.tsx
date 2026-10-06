import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { RawEmbed } from "@/components/raw-embed";
import {
  getUpcomingTournament,
  getPastTournaments,
} from "@/lib/data/tournaments";

export const metadata: Metadata = {
  title: "Leaderboard — TAGA",
  description: "Live and final leaderboards for TAGA tournaments.",
};

export default function LeaderboardPage() {
  const upcoming = getUpcomingTournament();
  const past = getPastTournaments();

  // Feature whichever tournament has a leaderboard embed set, preferring
  // the upcoming one (likely a live leaderboard) over past ones.
  const featured =
    upcoming?.leaderboardEmbedHtml != null
      ? upcoming
      : past.find((t) => t.leaderboardEmbedHtml);

  const otherLeaderboards = past.filter(
    (t) => t.leaderboardEmbedHtml && t.id !== featured?.id
  );

  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Scores
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              Leaderboard
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              Follow live scoring during tournaments and check final
              standings afterward, powered by Squabbit.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section>
        {featured ? (
          <>
            <SectionHeading
              eyebrow={featured.displayDate}
              title={featured.title}
            />
            <FadeIn delay={0.05}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-fairway-100 bg-white p-4 shadow-sm sm:p-6">
                <RawEmbed html={featured.leaderboardEmbedHtml!} />
              </div>
            </FadeIn>
            <div className="mt-6 text-center">
              <Link
                href="/tournaments"
                className="text-sm font-semibold text-fairway-700 hover:underline"
              >
                View full tournament details &amp; results →
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-dashed border-fairway-200 bg-fairway-50 p-10 text-center text-fairway-700/70">
            No leaderboard is available right now. Check back once a
            tournament is underway.
          </div>
        )}

        {otherLeaderboards.length > 0 && (
          <div className="mt-16 space-y-12 border-t border-fairway-100 pt-12">
            <SectionHeading eyebrow="Past Results" title="More Leaderboards" />
            {otherLeaderboards.map((t) => (
              <FadeIn key={t.id}>
                <div className="overflow-hidden rounded-3xl border border-fairway-100 bg-white p-4 shadow-sm sm:p-6">
                  <h3 className="font-display mb-4 text-lg font-semibold text-fairway-950">
                    {t.title} — {t.displayDate}
                  </h3>
                  <RawEmbed html={t.leaderboardEmbedHtml!} />
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
