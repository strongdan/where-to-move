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

const googleTagManagerScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9NJ3S7C');
`;

const googleAnalyticsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0LDTF74TC3');
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LDTF74TC3" />
        <script>{googleAnalyticsScript}</script>
        <script>{googleTagManagerScript}</script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9NJ3S7C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
