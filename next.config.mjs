/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
      { hostname: "utfs.io", port: "", protocol: "https" },
    ],
  },
};

export default nextConfig;
