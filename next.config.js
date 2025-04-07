/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
    output: 'export',
    basePath: '/castles-of-logic',
    assetPrefix: '/castles-of-logic/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
