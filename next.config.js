const withImages = require("next-images");

module.exports = withImages({
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_BASE_URL: "http://localhost:4100"
  },
});
