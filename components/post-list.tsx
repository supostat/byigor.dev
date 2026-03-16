import Link from "next/link";
import type { Post } from "@/lib/posts";

function PostRow({ post }: { post: Post }) {
  return (
    <div className="p-3 sm:p-[14px_18px] transition-colors hover:bg-amber-glow">
      <div className="flex items-baseline justify-between gap-4">
        <Link
          href={`/posts/${post.slug}`}
          className="text-[15px] tracking-[0.5px] text-amber-bright transition-[text-shadow] hover:[text-shadow:0_0_8px_var(--color-amber)]"
        >
          {post.title}
        </Link>
        <span className="shrink-0 text-[11px] text-amber-dim">
          {post.date}
        </span>
      </div>
    </div>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="font-display text-[22px] uppercase tracking-[3px] text-amber-bright [text-shadow:0_0_10px_var(--color-amber)]">
          &gt; ls ./posts
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-dim to-transparent" />
      </div>

      <div className="overflow-hidden rounded-[2px] border border-amber-dim">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className={
              index < posts.length - 1
                ? "border-b border-[rgba(255,176,0,0.15)]"
                : ""
            }
          >
            <PostRow post={post} />
          </div>
        ))}
      </div>

      <div className="mt-3">
        <Link
          href="/posts"
          className="inline-block border-b border-dashed border-amber-dim text-[11px] text-amber-dim transition-colors hover:text-amber-bright"
        >
          → cd ./posts/
        </Link>
      </div>
    </section>
  );
}
