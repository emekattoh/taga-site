import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { WinnerPodium } from "@/components/winner-podium";
import { RawEmbed } from "@/components/raw-embed";
import { InstagramPost } from "@/components/instagram-post";
import {
  getUpcomingTournament,
  getPastTournaments,
  getAllFirstPlaceWinners,
  getCourseMapUrl,
} from "@/lib/data/tournaments";
import { instagramPosts } from "@/lib/data/instagram";

export const metadata: Metadata = {
  title: "Tournaments — TAGA",
  description:
    "TAGA tournament schedule, results, photos, and our Hall of Fame of past winners.",
};

export default function TournamentsPage() {
  const upcoming = getUpcomingTournament();
  const pastTournaments = getPastTournaments();
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
              Tournaments &amp; Hall of Fame
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              See what&rsquo;s coming up next, catch up on past results and
              photos, and browse our running Hall of Fame of tournament
              winners.
            </p>
          </FadeIn>
        </Section>
      </div>

      {/* Upcoming tournament */}
      {upcoming && (
        <Section>
          <SectionHeading eyebrow="Up Next" title="Upcoming Tournament" />

          <FadeIn delay={0.05}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-fairway-100 bg-white shadow-sm">
              <div className="bg-fairway-900 px-8 py-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
                  {upcoming.displayDate}
                </p>
                <h3 className="font-display mt-1 text-2xl font-semibold text-fairway-50 sm:text-3xl">
                  {upcoming.title}
                </h3>
              </div>

              <div className="grid gap-8 p-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                    About This Tournament
                  </h4>
                  <p className="mt-3 leading-7 text-fairway-800/80">
                    {upcoming.description ?? upcoming.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                    Course &amp; Directions
                  </h4>
                  <p className="mt-3 font-display text-lg font-semibold text-fairway-950">
                    {upcoming.course.name}
                  </p>
                  <p className="text-fairway-800/80">{upcoming.course.address}</p>
                  {upcoming.course.phone && (
                    <p className="text-fairway-800/80">{upcoming.course.phone}</p>
                  )}
                  {upcoming.course.directions && (
                    <p className="mt-3 text-sm leading-6 text-fairway-700/80">
                      {upcoming.course.directions}
                    </p>
                  )}
                  <a
                    href={getCourseMapUrl(upcoming.course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-fairway-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fairway-600"
                  >
                    Get Directions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 21 3m0 0h-5.25M21 3v5.25M6.75 6.75H4.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-2.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {upcoming.leaderboardEmbedHtml && (
                <div className="border-t border-fairway-100 p-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-600">
                    Live Leaderboard
                  </h4>
                  <RawEmbed html={upcoming.leaderboardEmbedHtml} />
                </div>
              )}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* Past tournaments */}
      {pastTournaments.length > 0 && (
        <div className="border-t border-fairway-100 bg-fairway-50">
          <Section>
            <SectionHeading
              eyebrow="Looking Back"
              title="Past Tournaments"
              description="Results, courses, and photos from tournaments TAGA has already played."
            />

            <div className="mt-12 space-y-16">
              {pastTournaments.map((t) => (
                <div key={t.id} className="rounded-3xl border border-fairway-100 bg-white p-8 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-fairway-950">
                      {t.title}
                    </h3>
                    <p className="text-sm font-semibold text-gold-600">
                      {t.displayDate}
                    </p>
                  </div>
                  <p className="mt-1 text-fairway-800/70">
                    {t.course.name}
                    {t.course.address !== "TBD" ? ` — ${t.course.address}` : ""}
                  </p>
                  {t.summary && (
                    <p className="mt-3 text-fairway-800/80">{t.summary}</p>
                  )}

                  {t.overallChampion && (
                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gold-100 px-5 py-4">
                      <span className="text-2xl">👑</span>
                      <p className="font-display text-lg font-semibold text-fairway-950">
                        Overall Winner: {t.overallChampion}
                      </p>
                    </div>
                  )}

                  {t.winners.length > 0 && (
                    <div className="mt-10">
                      <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gold-600">
                        Net Prize Winners
                      </h4>
                      <WinnerPodium winners={t.winners} />
                    </div>
                  )}

                  {t.trophies && t.trophies.length > 0 && (
                    <div className="mt-10">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-600">
                        Trophy Winners
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {t.trophies.map((trophy) => (
                          <div
                            key={trophy.category}
                            className="rounded-2xl border border-fairway-100 bg-fairway-50 p-5"
                          >
                            <p className="font-display text-base font-semibold text-fairway-950">
                              {trophy.icon} {trophy.category}
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-fairway-800/80">
                              {trophy.recipients.map((name) => (
                                <li key={name}>{name}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {t.leaderboardEmbedHtml && (
                    <div className="mt-10">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-600">
                        Final Leaderboard
                      </h4>
                      <RawEmbed html={t.leaderboardEmbedHtml} />
                    </div>
                  )}

                  {t.gallery && t.gallery.length > 0 && (
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}

      {/* Instagram */}
      {instagramPosts.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="From Our Instagram"
            title="More From The Course"
            description="Follow TAGA on Instagram for more photos and highlights."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instagramPosts.map((url) => (
              <FadeIn key={url}>
                <InstagramPost url={url} />
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {/* Hall of Fame */}
      {hallOfFame.length > 0 && (
        <Section className="bg-fairway-950 rounded-3xl">
          <SectionHeading
            eyebrow="Hall of Fame"
            title="Our Champions"
            description="A running list of every tournament's top finisher — updated as new champions are crowned."
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
                    <p className="text-xs text-fairway-400">{entry.course}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
