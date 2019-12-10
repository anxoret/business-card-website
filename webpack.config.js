"use strict";

module.exports = {
    // mode: "development",
    entry: "./js/es6/main.js",
    output: {
    //   path: path.resolve(__dirname, 'dist'),
      filename: "build-es6.js" 
    },

    watch: NODE_ENV == "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null
}