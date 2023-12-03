/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@vintage/api","@vintage/ui", "@vintage/utils","@vintage/db", "@vintage/shadcn", "@vintage/auth"],
};

module.exports = nextConfig;
