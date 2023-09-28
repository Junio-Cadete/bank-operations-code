const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/bank-operations/' : '/',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin()
    ]
  }
})

