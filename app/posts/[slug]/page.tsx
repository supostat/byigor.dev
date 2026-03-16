import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { StatusBar } from "@/components/status-bar";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = await getPostBySlug(slug);

    return {
      title: `>_ ${frontmatter.title} — byigor.dev`,
      description: frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter } = post;

  return (
    <>
      <PageShell flicker={false}>
        <header className="mb-10">
          <div className="mb-3 text-[11px] text-amber-dim">
            {frontmatter.date}
          </div>
          <h1 className="font-display text-[28px] uppercase leading-tight tracking-[2px] text-amber-bright sm:text-[34px]">
            {frontmatter.title}
          </h1>
          <div className="mt-4 h-px bg-gradient-to-r from-amber-dim to-transparent" />
        </header>

        <article className="post-content">{content}</article>

        <div className="mt-16">
          <Link
            href="/posts"
            className="inline-block border-b border-dashed border-amber-dim text-[11px] text-amber-dim transition-colors hover:text-amber-bright"
          >
            ← cd ../posts/
          </Link>
        </div>
      </PageShell>

      <StatusBar />
    </>
  );
}
