import type { NextConfig } from "next";

const isPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPagesBuild ? "/SolComp" : "",
  assetPrefix: isPagesBuild ? "/SolComp/" : undefined,
};

export default nextConfig;
