/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export",
  assetPrefix: "https://tebeiksan.github.io/",
};

export default nextConfig;
