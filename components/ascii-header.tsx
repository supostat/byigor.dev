"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ASCII_ART = ` ██████╗ ██╗   ██╗██╗ ██████╗  ██████╗ ██████╗     ██████╗ ███████╗██╗   ██╗
 ██╔══██╗╚██╗ ██╔╝██║██╔════╝ ██╔═══██╗██╔══██╗    ██╔══██╗██╔════╝██║   ██║
 ██████╔╝ ╚████╔╝ ██║██║  ███╗██║   ██║██████╔╝    ██║  ██║█████╗  ██║   ██║
 ██╔══██╗  ╚██╔╝  ██║██║   ██║██║   ██║██╔══██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ██████╔╝   ██║   ██║╚██████╔╝╚██████╔╝██║  ██║ ██╗██████╔╝███████╗ ╚████╔╝
 ╚═════╝    ╚═╝   ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═╝╚═════╝ ╚══════╝  ╚═══╝`;

const FONT_STACK =
  "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";

export function AsciiHeader() {
  const preRef = useRef<HTMLPreElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const intrinsicWidthRef = useRef(0);
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>(
    undefined,
  );

  const recalculate = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || intrinsicWidthRef.current === 0) return;

    const availableWidth = wrapper.clientWidth;
    const newScale = Math.min(1, availableWidth / intrinsicWidthRef.current);
    setScale(newScale);

    const pre = preRef.current;
    if (pre) {
      setWrapperHeight(pre.scrollHeight * newScale);
    }
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    intrinsicWidthRef.current = pre.scrollWidth;
    recalculate();

    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, [recalculate]);

  return (
    <>
      <div
        ref={wrapperRef}
        className="mb-2 overflow-hidden"
        style={wrapperHeight ? { height: wrapperHeight } : undefined}
      >
        <pre
          ref={preRef}
          style={{
            fontFamily: FONT_STACK,
            transform: `scale(${scale})`,
            transformOrigin: "left top",
            willChange: "transform",
          }}
          className="whitespace-pre text-[13px] leading-[1.2] text-amber-bright [text-shadow:0_0_8px_var(--color-amber),0_0_20px_rgba(255,176,0,0.4)]"
        >
          {ASCII_ART}
        </pre>
      </div>
      <div className="mb-10 pl-0.5 text-[11px] sm:text-[13px] text-amber-dim">
        <span className="hidden sm:inline">
          [ PUGACHEV // FULLSTACK DEVELOPER // byigor.dev ]{" "}
        </span>
        <span className="sm:hidden">
          [ PUGACHEV // FULLSTACK // byigor.dev ]{" "}
        </span>
        <span className="inline-block h-[1.1em] w-2.5 animate-[blink_1s_step-end_infinite] bg-amber align-text-bottom" />
      </div>
    </>
  );
}
