const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/common/common.scss";'
      }
    }
  },
  // pwa: {
  //   iconPaths: {
  //     favicon32: 'src/assets/favicon.ico',
  //   }
  // },
  pages: {
    index: {
      entry: "src/pages/top/main.js",
      title: "FOLLOW THE DARKSIDE",
      template: 'public/index.html',
      filename: 'index.html',
    },
    info: {
      entry: 'src/pages/info/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/info.html',
      filename: 'info.html',
    },
    other: {
      entry: 'src/pages/other/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/other.html',
      filename: 'other.html',
    },
    contact: {
      entry: 'src/pages/contact/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/contact.html',
      filename: 'contact.html',
    },
    work1: {
      entry: 'src/pages/work/work1/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/dance-ai-for-beginners.html',
      filename: 'work/dance-ai-for-beginners.html',
    },
    work2: {
      entry: 'src/pages/work/work2/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/danceai-performance-at-stm32-summit.html',
      filename: 'work/danceai-performance-at-stm32-summit.html',
    },
    work3: {
      entry: 'src/pages/work/work3/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/tokaido53-hiroshige-effect.html',
      filename: 'work/tokaido53-hiroshige-effect.html',
    },
    work4: {
      entry: 'src/pages/work/work4/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/breakgan.html',
      filename: 'work/breakgan.html',
    },
    work5: {
      entry: 'src/pages/work/work5/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/breakgan-ft-steez.html',
      filename: 'work/breakgan-ft-steez.html',
    },
    work6: {
      entry: 'src/pages/work/work6/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/the-freshest-ai.html',
      filename: 'work/the-freshest-ai.html',
    },
    work7: {
      entry: 'src/pages/work/work7/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/gan-sanpo-ikuta.html',
      filename: 'work/gan-sanpo-ikuta.html',
    },
    work8: {
      entry: 'src/pages/work/work8/main.js',
      title: "FOLLOW THE DARKSIDE",
      template: 'public/work/rojiura-extension.html',
      filename: 'work/rojiura-extension.html',
    },
  },
  // set path for github pages
  outputDir: 'docs',
  assetsDir: './',
  // publicPath: './',
})
