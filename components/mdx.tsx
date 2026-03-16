import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function Heading2({ children }: { children?: ReactNode }) {
  return (
    <div className="mb-6 mt-12">
      <h2 className="font-display text-[22px] uppercase tracking-[2px] text-amber-bright">
        {children}
      </h2>
      <div className="mt-2 h-px bg-gradient-to-r from-amber-dim to-transparent" />
    </div>
  );
}

function Heading3({ children }: { children?: ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 font-display text-[18px] text-amber-bright">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children?: ReactNode }) {
  return <p className="mb-5 leading-[1.75]">{children}</p>;
}

function Anchor({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      className="border-b border-dashed border-amber-dim text-amber-bright transition-[text-shadow] hover:[text-shadow:0_0_8px_var(--color-amber)]"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function UnorderedList({ children }: { children?: ReactNode }) {
  return <ul className="mb-5 space-y-1.5 pl-2">{children}</ul>;
}

function ListItem({ children }: { children?: ReactNode }) {
  return (
    <li className="before:mr-2 before:text-amber-dim before:content-['>_']">
      {children}
    </li>
  );
}

function OrderedList({ children }: { children?: ReactNode }) {
  return <ol className="mb-5 list-decimal space-y-1.5 pl-6 marker:text-amber-dim">{children}</ol>;
}

function Blockquote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="my-6 border-l-2 border-amber-dim bg-amber-glow py-2 pl-4 pr-3 [&>p]:mb-0">
      {children}
    </blockquote>
  );
}

function HorizontalRule() {
  return <hr className="my-8 border-dashed border-amber-dim" />;
}

function Table({ children }: { children?: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-amber-dim text-[13px]">
        {children}
      </table>
    </div>
  );
}

function TableHead({ children }: { children?: ReactNode }) {
  return <thead className="bg-amber-glow">{children}</thead>;
}

function TableHeader({ children }: { children?: ReactNode }) {
  return (
    <th className="border border-amber-dim px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[1px] text-amber-bright">
      {children}
    </th>
  );
}

function TableRow({ children }: { children?: ReactNode }) {
  return (
    <tr className="transition-colors hover:bg-amber-glow">{children}</tr>
  );
}

function TableCell({ children }: { children?: ReactNode }) {
  return (
    <td className="border border-[rgba(255,176,0,0.15)] px-3 py-2">
      {children}
    </td>
  );
}

function Code(props: React.ComponentProps<"code">) {
  const { children, className, ...rest } = props;

  if ("data-language" in rest || "data-theme" in rest) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  }

  return (
    <code className="rounded-[2px] bg-amber-glow px-1.5 py-0.5 text-[0.9em] text-amber-bright">
      {children}
    </code>
  );
}

function Strong({ children }: { children?: ReactNode }) {
  return <strong className="font-bold text-amber-bright">{children}</strong>;
}

type CalloutType = "info" | "warning" | "security";

const CALLOUT_PREFIX: Record<CalloutType, string> = {
  info: "[i]",
  warning: "[!]",
  security: "[🔒]",
};

const CALLOUT_BORDER: Record<CalloutType, string> = {
  info: "border-amber-dim",
  warning: "border-amber-bright",
  security: "border-amber-bright",
};

function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children?: ReactNode;
}) {
  return (
    <div
      className={`my-6 border-l-2 ${CALLOUT_BORDER[type]} bg-amber-glow py-3 pl-4 pr-3`}
    >
      <span className="mr-2 text-[13px] font-bold text-amber-bright">
        {CALLOUT_PREFIX[type]}
      </span>
      <span className="[&>p]:mb-0 [&>p]:inline">{children}</span>
    </div>
  );
}

function Pre(props: React.ComponentProps<"pre">) {
  const { children, ...rest } = props;

  if ("data-language" in rest) {
    return <pre {...rest}>{children}</pre>;
  }

  return (
    <pre
      className="my-6 overflow-x-auto rounded-[2px] border border-amber-dim p-4 text-[13px] leading-[1.7]"
      style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace" }}
      {...rest}
    >
      {children}
    </pre>
  );
}

export const mdxComponents: MDXComponents = {
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  hr: HorizontalRule,
  table: Table,
  thead: TableHead,
  th: TableHeader,
  tr: TableRow,
  td: TableCell,
  pre: Pre,
  code: Code,
  strong: Strong,
  Callout,
};
