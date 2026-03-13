type Contact = {
  label: string;
  value: string;
  href: string;
};

export function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="font-display text-[22px] uppercase tracking-[3px] text-amber-bright [text-shadow:0_0_10px_var(--color-amber)]">
          &gt; cat ./contacts
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-dim to-transparent" />
      </div>

      <div className="flex flex-col">
        {contacts.map((contact, index) => (
          <div
            key={contact.label}
            className={`flex items-center py-2.5 text-sm ${
              index < contacts.length - 1
                ? "border-b border-dashed border-[rgba(255,176,0,0.2)]"
                : ""
            }`}
          >
            <span className="w-[120px] shrink-0 text-[13px] text-amber-dim">
              {contact.label}
            </span>
            <span className="mr-3 text-amber-dim">::</span>
            <a
              href={contact.href}
              {...(!contact.href.startsWith("mailto:") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-amber-bright transition-[text-shadow] hover:[text-shadow:0_0_8px_var(--color-amber)]"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
