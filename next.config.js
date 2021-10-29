/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/ZG9jOjE2NTc4NDk1-quick-start",
        permanent: true,
      },
    ];
  },
};
