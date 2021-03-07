const path = require("path");

module.exports = {
  entry: "./browser/app.js",
  output: {
    path: path.resolve(__dirname, "browser"),
    filename: "bundle.js",
  },
};
