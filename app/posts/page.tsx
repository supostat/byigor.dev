import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { StatusBar } from "@/components/status-bar";

export const metadata: Metadata = {
  title: ">_ posts — byigor.dev",
  description: "Articles and notes by Igor Pugachev",
};

export default function PostsPage() {
  return (
    <>
      <PageShell>
        <div className="mb-5 flex items-center gap-3">
          <h1 className="font-display text-[22px] uppercase tracking-[3px] text-amber-bright [text-shadow:0_0_10px_var(--color-amber)]">
            &gt; ls -la ./posts
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-dim to-transparent" />
        </div>

        <div className="mb-8 text-[13px] text-amber-dim">
          total 0 — no entries yet
        </div>

        <div>
          <Link
            href="/"
            className="inline-block border-b border-dashed border-amber-dim text-[11px] text-amber-dim transition-colors hover:text-amber-bright"
          >
            ← cd ~
          </Link>
        </div>
      </PageShell>

      <StatusBar />
    </>
  );
}
