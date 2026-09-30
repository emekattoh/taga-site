export type Winner = {
  place: 1 | 2 | 3;
  name: string;
  score?: string;
  photo?: string;
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
  /** ISO date string, e.g. "2026-10-03". Used for sorting and to determine
   * whether a tournament is upcoming or past. */
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
  /** Leave empty for tournaments that haven't happened yet. */
  winners: Winner[];
};

// Add new tournaments here — past or upcoming, in any order. The page
// automatically figures out which one is the "current/upcoming" tournament
// (the soonest one on or after today) and lists the rest as past
// tournaments, most recent first.
//
// Put photos in /public/images/tournaments/ and /public/images/winners/
// and reference them below.
export const tournaments: Tournament[] = [
  {
    id: "nigerian-independence-2026-10-03",
    title: "Nigerian Independence Tournament",
    date: "2026-10-03",
    displayDate: "October 3, 2026 · 8:00 AM",
    course: {
      name: "Oakhurst Golf Club",
      address: "20700 Mills Branch Dr, Porter, TX 77365",
      phone: "(281) 354-4653",
      directions:
        "Oakhurst Golf Club is just north of downtown Houston off Highway 59 (US-59 N). Take Hwy 59 north out of Houston to the Mills Branch Dr exit and follow the access road — the club is on the west side of the road. Arrive by 7:30 AM to check in before the 8:00 AM shotgun start.",
    },
    description:
      "TAGA celebrates Nigerian Independence Day with a special tournament bringing the community together for a day of golf, culture, and celebration. Come out for a fun, competitive round followed by food and fellowship to mark the occasion.",
    summary: "Celebrating Nigerian Independence Day on the course.",
    winners: [],
    gallery: [],
  },
  {
    id: "sample-weekly-2026-09-20",
    title: "Weekly Tournament",
    date: "2026-09-20",
    displayDate: "September 20, 2026",
    course: {
      name: "TBD Golf Course",
      address: "TBD",
    },
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

function toDate(t: Tournament) {
  return new Date(t.date + "T00:00:00");
}

/** The next tournament on or after today. Falls back to the most recently
 * dated tournament (even if in the past) if none are upcoming, so the page
 * always has something to feature. */
export function getUpcomingTournament(): Tournament | undefined {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcoming = tournaments
    .filter((t) => toDate(t) >= now)
    .sort((a, b) => toDate(a).getTime() - toDate(b).getTime());

  if (upcoming.length > 0) return upcoming[0];

  // No upcoming tournaments — fall back to the most recent past one.
  return [...tournaments].sort(
    (a, b) => toDate(b).getTime() - toDate(a).getTime()
  )[0];
}

/** All tournaments that already happened, most recent first, excluding
 * whichever tournament is currently featured as "upcoming". */
export function getPastTournaments(): Tournament[] {
  const upcoming = getUpcomingTournament();
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return tournaments
    .filter((t) => t.id !== upcoming?.id && toDate(t) < now)
    .sort((a, b) => toDate(b).getTime() - toDate(a).getTime());
}

/** Builds a Google Maps search URL from a course if no explicit mapUrl is set. */
export function getCourseMapUrl(course: Course): string {
  if (course.mapUrl) return course.mapUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${course.name} ${course.address}`
  )}`;
}

// Flattens winners across all past tournaments so the "Hall of Fame"
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
