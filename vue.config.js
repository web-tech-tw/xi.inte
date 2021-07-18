module.exports = {
  pages: {
    index: {
      title: 'XI',
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },

  devServer: {
    disableHostCheck: true
  },

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
