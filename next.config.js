/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

console.log(nextConfig.images.remotePatterns[0]);

module.exports = nextConfig;
