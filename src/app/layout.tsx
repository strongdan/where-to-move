import type { Metadata } from "next";
import { MicrosoftClarity } from "@components/MicrosoftClarity";
import "./globals.css"; // Import Tailwind styles

const canonicalWhereToMoveHost = "https://where-to-move.placesignals.com";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalWhereToMoveHost),
  title: "Where to Move Redirect",
  description: "Redirect-only domain handoff for the canonical Where to Move app.",
  alternates: {
    canonical: canonicalWhereToMoveHost,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
