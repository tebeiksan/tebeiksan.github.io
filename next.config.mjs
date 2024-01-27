/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export",
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  assetPrefix:
    process.env.APP_ENV == "local" ? "/" : "https://tebeiksan.github.io/",
};

export default nextConfig;
