import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: 
    [
      {hostname: 'specials-images.forbesimg.com'},
      {hostname: 'avatars.githubusercontent.com'}
    ]
  }
};

export default nextConfig;
