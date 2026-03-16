import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { StatusBar } from "@/components/status-bar";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: ">_ posts — byigor.dev",
  description: "Articles and notes by Igor Pugachev",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageShell>
        <div className="mb-5 flex items-center gap-3">
          <h1 className="font-display text-[22px] uppercase tracking-[3px] text-amber-bright [text-shadow:0_0_10px_var(--color-amber)]">
            &gt; ls -la ./posts
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-dim to-transparent" />
        </div>

        {posts.length === 0 ? (
          <div className="mb-8 text-[13px] text-amber-dim">
            total 0 — no entries yet
          </div>
        ) : (
          <>
            <div className="mb-6 text-[13px] text-amber-dim">
              total {posts.length}
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="block rounded-[2px] p-3 transition-colors hover:bg-amber-glow sm:p-[14px_18px]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] tracking-[0.5px] text-amber-bright transition-[text-shadow] hover:[text-shadow:0_0_8px_var(--color-amber)]">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-[11px] text-amber-dim">
                      {post.date}
                    </span>
                  </div>
                  {post.description && (
                    <p className="mt-1.5 text-[13px] leading-relaxed text-amber-dim">
                      {post.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-10">
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
