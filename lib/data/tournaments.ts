export type Winner = {
  place: 1 | 2 | 3;
  name: string;
  score?: string;
  photo?: string;
};

export type TrophyCategory = {
  category: string;
  icon?: string;
  recipients: string[];
};

export type Course = {
  name: string;
  address: string;
  // Optional extra directions/parking notes shown under the address.
  directions?: string;
  // Optional link to Google Maps (or any map provider). If omitted, one is
  // generated automatically from the address.
  mapUrl?: string;
  phone?: string;
};

export type Tournament = {
  id: string;
  title: string;
  /** "upcoming" shows in the featured section at the top of the page.
   * "completed" shows in Past Tournaments (and feeds the Hall of Fame).
   * Flip this manually once a tournament wraps up — don't rely on the
   * calendar date alone. */
  status: "upcoming" | "completed";
  /** ISO date string, e.g. "2026-10-03". Used only for sorting. */
  date: string;
  /** Human-friendly date/time shown on the page, e.g. "October 3, 2026 · 8:00 AM". */
  displayDate: string;
  course: Course;
  /** Description of the tournament — theme, format, what to expect. */
  description?: string;
  /** Short one-line summary used in compact listings. */
  summary?: string;
  coverPhoto?: string;
  gallery?: string[];
  /** Net prize winners (1st/2nd/3rd). Leave empty until results are in. */
  winners: Winner[];
  /** Trophy categories like Longest Drive, Closest to the Pin, Best Gross. */
  trophies?: TrophyCategory[];
  /** Headline "Overall Winner" callout, if the tournament names one. */
  overallChampion?: string;
};

// Add new tournaments here — past or upcoming, in any order. Exactly one
// tournament should have status "upcoming" at a time (the next one on the
// calendar) — the page features it at the top. Everything with status
// "completed" shows under Past Tournaments, most recent first.
//
// Put photos in /public/images/tournaments/ and /public/images/winners/
// and reference them below.
export const tournaments: Tournament[] = [
  {
    id: "nigerian-independence-2026-10-03",
    title: "Nigerian Independence Tournament",
    status: "completed",
    date: "2026-10-03",
    displayDate: "October 3, 2026 · 8:00 AM",
    course: {
      name: "Oakhurst Golf Club",
      address: "20700 Mills Branch Dr, Porter, TX 77365",
      phone: "(281) 354-4653",
      directions:
        "Oakhurst Golf Club is just north of downtown Houston off Highway 59 (US-59 N). Take Hwy 59 north out of Houston to the Mills Branch Dr exit and follow the access road — the club is on the west side of the road.",
    },
    description:
      "TAGA celebrated Nigeria's Independence Day with a special tournament bringing the community together for a day of golf, friendship, competition, and camaraderie.",
    summary: "Celebrating Nigerian Independence Day on the course.",
    overallChampion: "Rita Okafor",
    winners: [
      { place: 1, name: "Rita Okafor", score: "Net" },
      { place: 2, name: "Thomas Adache", score: "Net" },
      { place: 3, name: "Chris Eledu", score: "Net" },
    ],
    trophies: [
      {
        category: "Longest Drive",
        icon: "🚀",
        recipients: ["Thomas Adache", "Nicholas", "Mabel Osazuwa", "Niyi Oyemade"],
      },
      {
        category: "Closest to the Pin",
        icon: "🎯",
        recipients: ["Doks Odunsi", "Adebayo Akinfenwa", "Tolu A", "Kunle Ajayi"],
      },
      {
        category: "Best Gross",
        icon: "⛳",
        recipients: ["Thomas Adache"],
      },
      {
        category: "2nd Place Gross",
        icon: "🥈",
        recipients: ["Kunle Ajayi"],
      },
    ],
    gallery: [],
  },
];

/** The featured tournament at the top of the page — whichever one has
 * status "upcoming". If more than one is marked upcoming, the soonest
 * (by date) wins. Returns undefined if none are upcoming yet. */
export function getUpcomingTournament(): Tournament | undefined {
  return [...tournaments]
    .filter((t) => t.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}

/** All completed tournaments, most recent first. */
export function getPastTournaments(): Tournament[] {
  return [...tournaments]
    .filter((t) => t.status === "completed")
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Builds a Google Maps search URL from a course if no explicit mapUrl is set. */
export function getCourseMapUrl(course: Course): string {
  if (course.mapUrl) return course.mapUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${course.name} ${course.address}`
  )}`;
}

// Flattens winners across all completed tournaments so the "Hall of Fame"
// section can show every champion crowned so far.
export function getAllFirstPlaceWinners() {
  return getPastTournaments()
    .filter((t) => t.winners.some((w) => w.place === 1))
    .map((t) => ({
      tournamentTitle: t.title,
      date: t.displayDate,
      course: t.course.name,
      winner: t.winners.find((w) => w.place === 1)!,
    }));
}
