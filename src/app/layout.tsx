import type { Metadata } from "next";
import "./globals.css"; // Import Tailwind styles

export const metadata: Metadata = {
  title: "Where to Move",
  description: "Find the best places to live based on data-driven insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
