const webpack = require('webpack');
module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : `${process.env.VUE_APP_ASSETS_PUBLIC_PATH}`,           // 这里用的是相对路径
    // publicPath:'./',
    outputDir: "dist",     // 打包目录
    devServer: {
        open: false,            //浏览器自动打开页面
        host: "0.0.0.0",        //如果是真机测试，就使用这个IP
        port: 8080,             // 端口号
        https: false,           // 是否是https请求
        hotOnly: false,         //热更新（webpack已实现了，这里false即可）
        // proxy: {                // 跨域请求转发
        //     '/api': {
        //         target: "",
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     },
        // }
    },
    // 以下是pwa配置  配置网站图标的
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    productionSourceMap: false, // 打包后是否有.map文件 (影响打包后文件的大小)
    // configureWebpack: {  // 引入jquery
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //             $: "jquery",
    //             jQuery: "jquery",
    //             "windows.jQuery": "jquery"
    //         })
    //     ]
    // },
}

