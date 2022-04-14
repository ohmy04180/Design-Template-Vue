const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   app: {
  //     entry: 'src/modules/app/app.js',
  //     template: "public/app.html",
  //     filename: 'app.html',
  //     title: 'APP Page'
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "@modules": path.join(__dirname, "src/modules")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/main.scss";
        `
      }
    }
  }
});
