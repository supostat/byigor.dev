"use client";

import { useEffect, useState } from "react";

const PRE_LINES = [
  "BIOS v2.4.1 — PUGACHEV SYSTEMS INC.",
  "CPU: Igor Pugachev @ 3.6GHz (Fullstack Core)",
  "RAM: Stack Overflow Edition — 64MB OK",
  "Initializing kernel modules...",
];

const POST_LINES = [
  "Mounting /dev/projects ... OK",
  "Mounting /dev/contacts ... OK",
  "Starting session. Welcome back, user.",
  "──────────────────────────────────────────────",
];

const PROGRESS_TOTAL = 20;
const PROGRESS_STEP_MS = 60;

function formatProgressBar(filled: number): string {
  const empty = PROGRESS_TOTAL - filled;
  const percent = Math.round((filled / PROGRESS_TOTAL) * 100);
  return `Loading byigor.dev [${"█".repeat(filled)}${"░".repeat(empty)}] ${percent}%`;
}

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progressLine, setProgressLine] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function delay(ms: number) {
      await new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function run() {
      for (const line of PRE_LINES) {
        if (cancelled) return;
        await delay(120);
        if (cancelled) return;
        setLines((prev) => [...prev, line]);
      }

      for (let step = 0; step <= PROGRESS_TOTAL; step++) {
        if (cancelled) return;
        await delay(PROGRESS_STEP_MS);
        if (cancelled) return;
        setProgressLine(formatProgressBar(step));
      }

      if (cancelled) return;
      await delay(150);

      setLines((prev) => [...prev, formatProgressBar(PROGRESS_TOTAL)]);
      setProgressLine(null);

      for (const line of POST_LINES) {
        if (cancelled) return;
        await delay(80);
        if (cancelled) return;
        setLines((prev) => [...prev, line]);
      }

      await delay(200);
      if (!cancelled) onComplete();
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <div className="mb-10 text-[13px] text-amber-dim">
      {lines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      {progressLine !== null && <div>{progressLine}</div>}
    </div>
  );
}
