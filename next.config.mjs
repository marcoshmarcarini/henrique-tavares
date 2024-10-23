/** @type {import('next').NextConfig} */
const nextConfig = {
    "rules": {
        "@typescript-eslint/no-require-imports": "error"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                port: '',
            },
        ],
        formats: ['image/avif', 'image/webp']
    },
};

export default nextConfig;
