"use client";

import { useCallback, useState } from "react";
import { BootSequence } from "@/components/boot-sequence";
import { PageShell } from "@/components/page-shell";

export function Screen({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <PageShell className="justify-center">
      <BootSequence onComplete={handleBootComplete} />

      <div
        className={`transition-opacity duration-500 ${booted ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </PageShell>
  );
}
