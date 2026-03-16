export function PageShell({
  children,
  className,
  flicker = true,
}: {
  children: React.ReactNode;
  className?: string;
  flicker?: boolean;
}) {
  return (
    <div
      className={`relative z-[1] mx-auto flex min-h-screen max-w-[860px] flex-col px-4 py-10 sm:px-6 sm:py-20${flicker ? " animate-[flicker_8s_infinite]" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
