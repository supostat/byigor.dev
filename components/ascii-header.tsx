const ASCII_ART = ` ██████╗ ██╗   ██╗██╗ ██████╗  ██████╗ ██████╗     ██████╗ ███████╗██╗   ██╗
 ██╔══██╗╚██╗ ██╔╝██║██╔════╝ ██╔═══██╗██╔══██╗    ██╔══██╗██╔════╝██║   ██║
 ██████╔╝ ╚████╔╝ ██║██║  ███╗██║   ██║██████╔╝    ██║  ██║█████╗  ██║   ██║
 ██╔══██╗  ╚██╔╝  ██║██║   ██║██║   ██║██╔══██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ██████╔╝   ██║   ██║╚██████╔╝╚██████╔╝██║  ██║ ██╗██████╔╝███████╗ ╚████╔╝
 ╚═════╝    ╚═╝   ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═╝╚═════╝ ╚══════╝  ╚═══╝`;

export function AsciiHeader() {
  return (
    <>
      <pre className="mb-2 overflow-x-auto whitespace-pre font-[ui-monospace,SFMono-Regular,Menlo,Consolas,monospace] text-[13px] leading-[1.2] text-amber-bright [text-shadow:0_0_8px_var(--color-amber),0_0_20px_rgba(255,176,0,0.4)]">
        {ASCII_ART}
      </pre>
      <div className="mb-10 pl-0.5 text-[13px] text-amber-dim">
        [ PUGACHEV // FULLSTACK DEVELOPER // byigor.dev ]{" "}
        <span className="inline-block h-[1.1em] w-2.5 animate-[blink_1s_step-end_infinite] bg-amber align-text-bottom" />
      </div>
    </>
  );
}
