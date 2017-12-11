const path = require('path');


module.exports = {
  entry: './src/javascripts/app.jsx',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: [/\.js$/,/\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
