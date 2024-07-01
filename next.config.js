const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
