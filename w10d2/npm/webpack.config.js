var path = require('path');

module.exports = {
  entry: "./entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  //babble
  module: {
    rules: [
      {
        test: [/\.jsx?$/], // Specifies file types to transpile
        exclude: /(node_modules)/, // Leaves dependencies alone
        loader: 'babel-loader', // Sets Babel as the transpiler
        query: {
          presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
        }
      }
    ]
  },
}