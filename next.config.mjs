// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // 🚨 Skip ESLint checks during Vercel build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
