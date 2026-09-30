export type ExcoMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  handicap?: string;
};

// Edit this list to update the Executive Committee page.
// Add a photo at /public/images/exco/<id>.jpg and set `photo` to that path.
export const excoMembers: ExcoMember[] = [
  {
    id: "president",
    name: "TBD",
    role: "President",
    bio: "Leads TAGA's overall vision, represents the association externally, and sets the tone for our weekly rounds and events.",
    handicap: "—",
  },
  {
    id: "vice-president",
    name: "TBD",
    role: "Vice President",
    bio: "Supports the President and steps in to run tournaments and meetings, with a focus on member experience.",
    handicap: "—",
  },
  {
    id: "secretary",
    name: "TBD",
    role: "Secretary",
    bio: "Keeps TAGA organized — meeting notes, communications, and member records.",
    handicap: "—",
  },
  {
    id: "treasurer",
    name: "TBD",
    role: "Treasurer",
    bio: "Manages dues, tournament fees, and the association's finances.",
    handicap: "—",
  },
  {
    id: "tournament-director",
    name: "TBD",
    role: "Tournament Director",
    bio: "Sets up the weekly tournament formats, pairings, and course logistics.",
    handicap: "—",
  },
  {
    id: "membership-chair",
    name: "TBD",
    role: "Membership Chair",
    bio: "Welcomes new members and keeps the TAGA community growing.",
    handicap: "—",
  },
];
