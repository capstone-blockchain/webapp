const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const currentTime = Date.now()
const jsFile = `index-${currentTime}.js`
const cssFile = `index-${currentTime}.css`

const paths = {
  IMG: path.resolve(__dirname, "./dist/images")
}

const config = {
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json", ".css"],
    alias: {
      Pages: path.resolve(__dirname, "./src/pages/"),
      Images: paths.IMG
    }
  },
  entry: ["./src/app.jsx", "./dist/styles/application.scss"],

  output: {
    filename: jsFile,
    path: path.resolve(__dirname, "./bundles"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        REST_ENDPOINT: JSON.stringify("http://172.104.166.110:5000")
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextWebpackPlugin({
      filename: cssFile,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      favicon: "./dist/favicon.ico",
      template: "./dist/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
}

module.exports = config
