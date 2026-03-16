import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { amberTheme } from "@/lib/shiki-amber-theme";
import { mdxComponents } from "@/components/mdx";

export type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

type Frontmatter = Post;

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): Post[] {
  const files = fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIRECTORY, file), "utf-8");
      const { data } = matter(raw);

      const slug = file.replace(/\.mdx$/, "");

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string | undefined,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

function resolvePostPath(slug: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid post slug: ${slug}`);
  }

  return path.join(POSTS_DIRECTORY, `${slug}.mdx`);
}

export async function getPostBySlug(slug: string) {
  const filePath = resolvePostPath(slug);
  const raw = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: raw,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: amberTheme,
              keepBackground: true,
            },
          ],
        ],
      },
    },
    components: mdxComponents,
  });

  return { content, frontmatter };
}
