module.exports = {
  mode: "development",
  output: {
    library: "import-antd",
    libraryTarget: "umd"
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
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
