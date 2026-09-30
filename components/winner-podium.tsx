"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Winner } from "@/lib/data/tournaments";

const PLACE_STYLES: Record<
  Winner["place"],
  { label: string; ring: string; badge: string; medal: string; order: string; height: string }
> = {
  1: {
    label: "1st Place",
    ring: "ring-gold-400",
    badge: "bg-gold-400 text-fairway-950",
    medal: "🏆",
    order: "sm:order-2",
    height: "sm:pb-8",
  },
  2: {
    label: "2nd Place",
    ring: "ring-fairway-300",
    badge: "bg-fairway-100 text-fairway-800",
    medal: "🥈",
    order: "sm:order-1",
    height: "sm:pb-2",
  },
  3: {
    label: "3rd Place",
    ring: "ring-fairway-200",
    badge: "bg-sand-100 text-fairway-800",
    medal: "🥉",
    order: "sm:order-3",
    height: "sm:pb-0",
  },
};

export function WinnerPodium({ winners }: { winners: Winner[] }) {
  const sorted = [...winners].sort((a, b) => a.place - b.place);

  return (
    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:justify-center sm:gap-6">
      {sorted.map((winner, i) => {
        const style = PLACE_STYLES[winner.place];
        return (
          <motion.div
            key={winner.place}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: "easeOut" }}
            className={`flex-1 ${style.order} ${style.height}`}
          >
            <div className="rounded-2xl border border-fairway-100 bg-white p-5 text-center shadow-sm">
              <div
                className={`relative mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-fairway-50 ring-4 ${style.ring}`}
              >
                {winner.photo ? (
                  <Image
                    src={winner.photo}
                    alt={winner.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-3xl">{style.medal}</span>
                )}
              </div>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
              >
                {style.medal} {style.label}
              </span>
              <p className="mt-3 font-display text-lg font-semibold text-fairway-950">
                {winner.name}
              </p>
              {winner.score && (
                <p className="text-sm text-fairway-700/70">Score: {winner.score}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
