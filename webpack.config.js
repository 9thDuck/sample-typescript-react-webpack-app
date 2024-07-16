const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./src/index.tsx",
 output: {
  filename: "[name].js",
  asyncChunks: true,
  path: path.resolve(__dirname, "dist"),
  clean: true,
 },
 resolve: {
  extensions: [".ts", ".tsx", ".js"],
 },
 module: {
  rules: [
   {
    test: /\.(tsx|js|jsx|ts|json)$/,
    use: "babel-loader",
    exclude: /node_modules/,
   },
   {
    test: /\.s?css$/,
    use: [
     "style-loader",
     {
      loader: "css-loader",
      options: {
       modules: true,
       sourceMap: true,
      },
     },
     {
      loader: "sass-loader",
      options: {
       sourceMap: true,
      },
     },
    ],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
   },
   {
    test: /\.(csv|tsv)$/i,
    use: ["csv-loader"],
   },
   {
    test: /\.xml$/i,
    use: ["xml-loader"],
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/index.html",
  }),
 ],
 devServer: {
  compress: true,
  port: 3000,
 },
 optimization: {
  usedExports: true,
  splitChunks: {
   chunks: "all",
  },
 },
};
