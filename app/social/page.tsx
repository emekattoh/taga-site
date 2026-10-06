import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { InstagramPost } from "@/components/instagram-post";
import { instagramPosts } from "@/lib/data/instagram";

export const metadata: Metadata = {
  title: "Social — TAGA",
  description: "Follow TAGA on Instagram — photos and highlights from the course.",
};

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/taga_htx/";

export default function SocialPage() {
  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @taga_htx
            </span>
            <h1 className="font-display mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              TAGA on Social
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fairway-200">
              Photos and highlights from our tournaments, straight from
              Instagram.
            </p>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-fairway-950 transition-colors hover:bg-gold-300"
            >
              Follow Us on Instagram
            </a>
          </FadeIn>
        </Section>
      </div>

      <Section>
        {instagramPosts.length > 0 ? (
          <>
            <SectionHeading
              eyebrow="Recent Posts"
              title="From The Course"
              align="center"
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {instagramPosts.map((url, i) => (
                <FadeIn key={url} delay={i * 0.05}>
                  <InstagramPost url={url} />
                </FadeIn>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-dashed border-fairway-200 bg-fairway-50 p-10 text-center text-fairway-700/70">
            No posts yet — check back soon.
          </div>
        )}
      </Section>
    </>
  );
}
