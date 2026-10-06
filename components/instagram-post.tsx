"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

function loadInstagramEmbedScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.instgrm) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

/**
 * Embeds a single public Instagram post using Instagram's official oEmbed
 * widget. Pass the post's permalink, e.g.
 * https://www.instagram.com/p/ABC123xyz/
 */
export function InstagramPost({ url }: { url: string }) {
  useEffect(() => {
    let mounted = true;
    loadInstagramEmbedScript().then(() => {
      if (mounted) window.instgrm?.Embeds.process();
    });
    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "12px",
        margin: 0,
        maxWidth: "100%",
        minWidth: "260px",
        width: "100%",
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}
