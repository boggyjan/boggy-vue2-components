module.exports = {
  publicPath: './',
  outputDir: './dist/',
  chainWebpack: (config) => {
    // config.output.library();
    config.entryPoints.clear();
    config.entry("ScrollShow").add("./src/components/ScrollShow.vue").end();
    config.entry("Carousel").add("./src/components/Carousel.vue").end();
    config.entry("ThreeDBox").add("./src/components/ThreeDBox.vue").end();
    config.entry("DragSort").add("./src/components/DragSort.vue").end();
    config.entry("Cheat").add("./src/components/Cheat.vue").end();
    config.entry("TypingTextAnimation").add("./src/components/TypingTextAnimation.vue").end();
    config.entry("LilychouchouTypingTextAnimation").add("./src/components/LilychouchouTypingTextAnimation.vue").end();
    config.entry("Dialog").add("./src/components/Dialog.vue").end();
    config.entry("Toast").add("./src/components/Toast.vue").end();
    config.output.filename('[name].js')
  }
}