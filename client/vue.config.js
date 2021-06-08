const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: "http://backend-docker:3000",
  },
  transpileDependencies: ["vuetify"],
};
