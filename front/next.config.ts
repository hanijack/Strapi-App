import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "skilled-kindness-813ac194ed.media.strapiapp.com",
        port: '',
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
