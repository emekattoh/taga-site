import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fairway-900/10 bg-fairway-950 text-fairway-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-bold text-fairway-950">
              T
            </span>
            <span className="font-display text-lg font-semibold text-fairway-50">
              TAGA
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-fairway-300">
            Texas America Golf Association — a community of golfers playing
            weekly tournaments across Texas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold-300">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-fairway-200">
            <li><Link href="/about" className="hover:text-gold-200">About TAGA</Link></li>
            <li><Link href="/exco" className="hover:text-gold-200">Executive Committee</Link></li>
            <li><Link href="/tournaments" className="hover:text-gold-200">Tournaments</Link></li>
            <li><Link href="/newsletter" className="hover:text-gold-200">Newsletter</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold-300">Members</h3>
          <ul className="mt-3 space-y-2 text-sm text-fairway-200">
            <li><Link href="/membership" className="hover:text-gold-200">Member Login</Link></li>
            <li><Link href="/membership" className="hover:text-gold-200">Join TAGA</Link></li>
            <li><Link href="/payments" className="hover:text-gold-200">Payments &amp; Dues</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold-300">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-fairway-200">
            <li><Link href="/contact" className="hover:text-gold-200">Get in touch</Link></li>
            <li className="text-fairway-300">Texas, USA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-fairway-900/40 px-5 py-5 text-center text-xs text-fairway-400">
        © {year} Texas America Golf Association (TAGA). All rights reserved.
      </div>
    </footer>
  );
}
