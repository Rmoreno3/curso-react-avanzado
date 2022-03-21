const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "ap.bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
