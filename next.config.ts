import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: path.resolve(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
