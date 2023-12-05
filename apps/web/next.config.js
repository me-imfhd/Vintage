/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@vintage/api",
    "@vintage/ui",
    "@vintage/utils",
    "@vintage/db",
    "@vintage/shadcn",
    "@vintage/auth",
  ],
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value:
              "key=value; Domain=localhost:3001; Path=/; HttpOnly; Secure; SameSite=None",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
