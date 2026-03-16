export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-[1] mx-auto flex min-h-screen max-w-[860px] animate-[flicker_8s_infinite] flex-col px-4 py-10 sm:px-6 sm:py-20${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
