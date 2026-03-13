type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
};

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="font-display text-[22px] uppercase tracking-[3px] text-amber-bright [text-shadow:0_0_10px_var(--color-amber)]">
          &gt; ls ./projects
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-dim to-transparent" />
      </div>

      <div className="overflow-hidden rounded-[2px] border border-amber-dim">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`p-3 sm:grid sm:grid-cols-[1fr_auto] sm:items-start sm:gap-2 sm:p-[14px_18px] transition-colors hover:bg-amber-glow ${
              index < projects.length - 1
                ? "border-b border-[rgba(255,176,0,0.15)]"
                : ""
            }`}
          >
            <div>
              <div className="mb-1 flex items-baseline gap-2.5">
                <span className="hidden sm:inline text-xs text-amber-dim">drwxr-xr-x</span>
                <span className="text-[15px] tracking-[0.5px] text-amber-bright transition-[text-shadow] hover:[text-shadow:0_0_8px_var(--color-amber)]">
                  {project.name}/
                </span>
              </div>
              <div className="text-[13px] leading-normal text-amber-dim">
                {project.description}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block border-b border-dashed border-amber-dim text-[11px] text-amber-dim transition-colors hover:text-amber-bright"
              >
                → {project.link.replace("https://", "")}
              </a>
            </div>
            <div className="mt-2 flex flex-wrap gap-1 sm:mt-0 sm:flex-col sm:items-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-[1px] border border-amber-dim px-[7px] py-px text-[11px] text-amber-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
