import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { RawEmbed } from "@/components/raw-embed";
import { leaderboardEmbedHtml, leaderboardSourceUrl } from "@/lib/data/leaderboard";

export const metadata: Metadata = {
  title: "Leaderboard — TAGA",
  description:
    "Live TAGA league standings and tournament scoring, powered by Squabbit.",
};

export default function LeaderboardPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-fairway-950">
        <div className="bg-dot-grid absolute inset-0 opacity-20" />
        {/* soft radial glow */}
        <div
          className="absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold-400), transparent 70%)",
          }}
        />
        <Section className="relative text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Live Standings
            </span>
            <h1 className="font-display mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              TAGA League Leaderboard
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              Full standings across every TAGA tournament and round, updated
              live by Squabbit.
            </p>
          </FadeIn>
        </Section>
      </div>

      {/* Leaderboard embed */}
      <Section>
        {leaderboardEmbedHtml ? (
          <FadeIn delay={0.05}>
            <div className="overflow-hidden rounded-3xl border border-fairway-100 bg-gradient-to-b from-fairway-50 to-white p-2 shadow-lg shadow-fairway-900/5 sm:p-4">
              <div className="overflow-hidden rounded-2xl">
                <RawEmbed html={leaderboardEmbedHtml} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
              <p className="text-sm text-fairway-700/60">
                Standings powered by{" "}
                <a
                  href={leaderboardSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-fairway-700 hover:underline"
                >
                  Squabbit
                </a>
              </p>
              <span className="hidden h-1 w-1 rounded-full bg-fairway-300 sm:inline-block" />
              <Link
                href="/tournaments"
                className="text-sm font-semibold text-fairway-700 hover:underline"
              >
                See tournament results &amp; photos →
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="rounded-3xl border border-dashed border-fairway-200 bg-fairway-50 p-10 text-center text-fairway-700/70">
            The leaderboard isn&rsquo;t available right now. Check back
            soon.
          </div>
        )}
      </Section>
    </>
  );
}
