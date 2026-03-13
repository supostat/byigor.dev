"use client";

import { useEffect } from "react";

const FAVICON_ON = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#0A0800"/><text x="2" y="22" font-family="monospace" font-size="14" font-weight="bold" fill="#FFB000">&gt;_</text><rect x="21" y="17" width="8" height="2.5" fill="#FFB000"/></svg>',
)}`;

const FAVICON_OFF = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#0A0800"/><text x="2" y="22" font-family="monospace" font-size="14" font-weight="bold" fill="#FFB000">&gt;_</text></svg>',
)}`;

export function FaviconBlink() {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) return;

    let visible = true;
    const interval = setInterval(() => {
      visible = !visible;
      link.href = visible ? FAVICON_ON : FAVICON_OFF;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
