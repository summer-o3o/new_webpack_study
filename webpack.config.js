const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx', // webpack 최초 진입점(엔트리 포인트) 파일 경로를 설정합니다.
  output: { // webpack을 실행한 후의 결과물의 이름/경로 등을 설정합니다.
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동합니다.
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
  },
  mode: 'development',
  devtool: 'eval',
};