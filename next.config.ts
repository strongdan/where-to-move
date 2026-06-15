import type { NextConfig } from "next";

const canonicalWhereToMoveHost = "https://wheretomove.placesignals.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: `${canonicalWhereToMoveHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
