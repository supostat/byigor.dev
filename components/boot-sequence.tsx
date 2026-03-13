"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "BIOS v2.4.1 — PUGACHEV SYSTEMS INC.",
  "CPU: Igor Pugachev @ 3.6GHz (Fullstack Core)",
  "RAM: Stack Overflow Edition — 64MB OK",
  "Initializing kernel modules...",
  "Loading byigor.dev [████████████████████] 100%",
  "Mounting /dev/projects ... OK",
  "Mounting /dev/contacts ... OK",
  "Starting session. Welcome back, user.",
  "──────────────────────────────────────────────",
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < BOOT_LINES.length; i++) {
        if (cancelled) return;
        const delay = i < 3 ? 120 : 80;
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (cancelled) return;
        setVisibleLines((prev) => [...prev, BOOT_LINES[i]]);
      }

      await new Promise((resolve) => setTimeout(resolve, 200));
      if (!cancelled) onComplete();
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <div className="mb-10 text-[13px] text-amber-dim">
      {visibleLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}
