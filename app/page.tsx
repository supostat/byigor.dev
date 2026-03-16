import { AsciiHeader } from "@/components/ascii-header";
import { ContactList } from "@/components/contact-list";
import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { Screen } from "@/components/screen";
import { StatusBar } from "@/components/status-bar";
import { ManPage } from "@/components/man-page";
import { getAllPosts } from "@/lib/posts";

const PROJECTS = [
  {
    name: "zodra",
    description:
      "End-to-end type safety for Ruby on Rails — generates TypeScript interfaces, Zod schemas, and type-safe API clients from Ruby DSL",
    tags: ["Ruby", "TypeScript", "Rails"],
    link: "https://github.com/supostat/zodra",
  },
  {
    name: "custos",
    description:
      "Plugin-based authentication for Ruby on Rails — flexible, provider-agnostic auth with a clean plugin architecture",
    tags: ["Ruby", "Rails"],
    link: "https://github.com/supostat/Custos",
  },
  {
    name: "rft",
    description:
      "Zero-config Docker Compose isolation for git worktrees — detects compose files, allocates non-conflicting ports, manages stacks",
    tags: ["Rust", "Docker", "CLI"],
    link: "https://github.com/supostat/rft-cli",
  },
  {
    name: "PROJECT_02",
    description: "",
    tags: ["CLASSIFIED"],
    link: "",
    classified: true,
  },
  {
    name: "PROJECT_03",
    description: "",
    tags: ["CLASSIFIED"],
    link: "",
    classified: true,
  },
];

const POSTS = getAllPosts();

const CONTACTS = [
  { label: "GITHUB", value: "github.com/supostat", href: "https://github.com/supostat" },
  { label: "TELEGRAM", value: "t.me/supostat84", href: "https://t.me/supostat84" },
  { label: "EMAIL", value: "igor@byigor.dev", href: "mailto:igor@byigor.dev" },
  { label: "DOMAIN", value: "byigor.dev", href: "https://byigor.dev" },
];

export default function HomePage() {
  return (
    <>
      <Screen>
        <AsciiHeader />
        <ManPage />
        <ProjectList projects={PROJECTS} />
        <PostList posts={POSTS} />
        <ContactList contacts={CONTACTS} />
      </Screen>

      <StatusBar />
    </>
  );
}
