/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to a subdirectory (e.g., github.com/username/repo-name), uncomment and set:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
}

export default nextConfig;
