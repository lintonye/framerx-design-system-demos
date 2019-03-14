module.exports = {
  mode: "development",
  output: {
    library: "import-antd",
    libraryTarget: "umd"
  },
  externals: {
    react: "react", // Case matters here
    "react-dom": "reactDOM" // Case matters here
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: ["@babel/preset-react"]
        }
      }
    ]
  }
};
