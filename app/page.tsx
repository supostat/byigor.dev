import { AsciiHeader } from "@/components/ascii-header";
import { ContactList } from "@/components/contact-list";
import { ProjectList } from "@/components/project-list";
import { Screen } from "@/components/screen";
import { StatusBar } from "@/components/status-bar";
import { WhoamiBlock } from "@/components/whoami-block";

const PROJECTS = [
  {
    name: "PROJECT_01",
    description: "Project name — short description of what it does and why",
    tags: ["Node.js", "React"],
    link: "https://github.com/byigor/project-01",
  },
  {
    name: "PROJECT_02",
    description: "Project name — short description of what it does and why",
    tags: ["Python", "PostgreSQL"],
    link: "https://github.com/byigor/project-02",
  },
  {
    name: "PROJECT_03",
    description: "Project name — short description of what it does and why",
    tags: ["TypeScript", "Docker"],
    link: "https://github.com/byigor/project-03",
  },
];

const CONTACTS = [
  { label: "GITHUB", value: "github.com/byigor", href: "https://github.com/byigor" },
  { label: "TELEGRAM", value: "t.me/byigor", href: "https://t.me/byigor" },
  { label: "EMAIL", value: "igor@byigor.dev", href: "mailto:igor@byigor.dev" },
  { label: "DOMAIN", value: "byigor.dev", href: "https://byigor.dev" },
];

export default function HomePage() {
  return (
    <>
      <Screen>
        <AsciiHeader />
        <WhoamiBlock />
        <ProjectList projects={PROJECTS} />
        <ContactList contacts={CONTACTS} />
      </Screen>

      <StatusBar />
    </>
  );
}
