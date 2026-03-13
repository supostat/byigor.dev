"use client";

import { useEffect, useState } from "react";

function formatClock(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function StatusBar() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    setClock(formatClock(new Date()));
    const interval = setInterval(() => {
      setClock(formatClock(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] flex justify-between bg-amber px-4 py-[3px] font-mono text-xs text-bg">
      <span>IGOR PUGACHEV — FULLSTACK DEVELOPER</span>
      <span>{clock}</span>
    </div>
  );
}
