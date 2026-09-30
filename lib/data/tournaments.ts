export type Winner = {
  place: 1 | 2 | 3;
  name: string;
  score?: string;
  photo?: string;
};

export type Tournament = {
  id: string;
  title: string;
  date: string; // human readable, e.g. "September 20, 2026"
  course: string;
  summary?: string;
  coverPhoto?: string;
  gallery?: string[];
  winners: Winner[];
};

// Add a new entry at the top of this array each week to feature it on the
// Tournaments page. Put photos in /public/images/tournaments/ and
// /public/images/winners/ and reference them here.
export const tournaments: Tournament[] = [
  {
    id: "sample-weekly-2026-09-20",
    title: "Weekly Tournament",
    date: "September 20, 2026",
    course: "TBD Golf Course",
    summary:
      "Add your latest weekly tournament here — results, a short recap, and photos from the round.",
    winners: [
      { place: 1, name: "TBD", score: "—" },
      { place: 2, name: "TBD", score: "—" },
      { place: 3, name: "TBD", score: "—" },
    ],
    gallery: [],
  },
];

// Simple helper so the "Hall of Fame" section can flatten winners across
// tournaments without extra plumbing later.
export function getAllFirstPlaceWinners() {
  return tournaments
    .filter((t) => t.winners.some((w) => w.place === 1))
    .map((t) => ({
      tournamentTitle: t.title,
      date: t.date,
      winner: t.winners.find((w) => w.place === 1)!,
    }));
}
