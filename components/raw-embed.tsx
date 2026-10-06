"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a trusted, admin-provided HTML embed snippet (e.g. a Squabbit
 * leaderboard embed) and re-executes any <script> tags it contains, since
 * assigning innerHTML does not run scripts on its own.
 *
 * IMPORTANT: `html` must come from a trusted source (content we control in
 * the codebase, like lib/data/tournaments.ts) — never render arbitrary
 * user-submitted HTML through this component.
 */
export function RawEmbed({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !html) return;

    container.innerHTML = html;

    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.text = oldScript.textContent ?? "";
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [html]);

  return <div ref={containerRef} className={className} />;
}
