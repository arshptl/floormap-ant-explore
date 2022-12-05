const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

const pluginAntdLess = withAntdLess({
  lessVarsFilePath: "./src/styles/variables.less",
});

module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
  webpack5: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.edrawmax.com",
      "ibb.co",
      "i.ibb.co",
      "i.imgur.com",
    ],
  },
});
