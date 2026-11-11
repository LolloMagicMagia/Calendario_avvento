// Se il repo si chiama "avvento", GitHub Pages serve il sito su /avvento.
// Il workflow imposta NEXT_PUBLIC_BASE_PATH automaticamente.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
