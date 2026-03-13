import type { Metadata } from "next";
import { Share_Tech_Mono, VT323 } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "byigor.dev — Igor Pugachev",
  description:
    "Fullstack developer. Builds things end-to-end. No layer is foreign territory.",
  metadataBase: new URL("https://byigor.dev"),
  openGraph: {
    title: "byigor.dev — Igor Pugachev",
    description:
      "Fullstack developer. Builds things end-to-end. No layer is foreign territory.",
    url: "https://byigor.dev",
    siteName: "byigor.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "byigor.dev — Igor Pugachev",
    description:
      "Fullstack developer. Builds things end-to-end. No layer is foreign territory.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
