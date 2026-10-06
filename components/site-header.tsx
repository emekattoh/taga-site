"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/exco", label: "Exco" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/social", label: "Social" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fairway-900/10 bg-fairway-950/95 backdrop-blur supports-[backdrop-filter]:bg-fairway-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-bold text-fairway-950">
            T
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-fairway-50">
            TAGA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-fairway-800 text-gold-300"
                    : "text-fairway-100 hover:bg-fairway-900 hover:text-gold-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/membership"
            className="rounded-full px-4 py-2 text-sm font-medium text-fairway-100 hover:text-gold-200"
          >
            Member Login
          </Link>
          <Link
            href="/membership"
            className="rounded-full bg-gold-400 px-4 py-2 text-sm font-semibold text-fairway-950 transition-colors hover:bg-gold-300"
          >
            Join TAGA
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-fairway-50 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-fairway-900/40 bg-fairway-950 px-5 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-fairway-100 hover:bg-fairway-900 hover:text-gold-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2 border-t border-fairway-900/40 pt-3">
              <Link
                href="/membership"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full px-4 py-2 text-center text-sm font-medium text-fairway-100"
              >
                Member Login
              </Link>
              <Link
                href="/membership"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-gold-400 px-4 py-2 text-center text-sm font-semibold text-fairway-950"
              >
                Join TAGA
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
