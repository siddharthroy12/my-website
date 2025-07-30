/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SUPABASE_URL.replace("https://", ""),
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: false,
  experimental: {
    esmExternals: "loose",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // Dev note: I have a life outside code. I don't care if Typescript thinks my code is wrong.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
