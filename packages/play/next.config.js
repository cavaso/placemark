/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

let config = {
  productionBrowserSourceMaps: true,
  compress: false,
  swcMinify: true,

  // TODO: it would be nice if this worked, but cross-origin
  // workers are not a thing yet.
  // assetPrefix: isProduction ? "https://static.placemark.io" : "", // "http://0.0.0.0:8787",

  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = config;
