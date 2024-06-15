/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "goformeet.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
