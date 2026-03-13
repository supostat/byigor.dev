"use client";

import { useCallback, useState } from "react";
import { BootSequence } from "@/components/boot-sequence";

export function Screen({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <div className="relative z-[1] mx-auto flex min-h-screen max-w-[860px] animate-[flicker_8s_infinite] flex-col justify-center px-6 py-20">
      <BootSequence onComplete={handleBootComplete} />

      <div
        className={`transition-opacity duration-500 ${booted ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
