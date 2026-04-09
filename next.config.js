/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/seconne-hp-v2-preview' : '',
  assetPrefix: isGitHubPages ? '/seconne-hp-v2-preview/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
