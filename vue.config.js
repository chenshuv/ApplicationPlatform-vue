module.exports = {
    publicPath: './',
    // vue.config.js，这个文件是自己创建的，为了解决vue-cli 3.0版本下的跨域问题；
    // 特别需要注意的是，proxy中的target配置；
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            /*
             * 配置跨域；配置多个跨域；
             * 需要重启，方能生效；
             */
            // paths
            '/ssa-ui/api': {
                target: 'http://xx.xx.xx.xxx:xxxx/ssa-ui/api',  //跨域地址
                changeOrigin: true,  // 是否跨域
                ws: true,  // 是否使用https
                pathRewrite: {
                    '^/ssa-ui/api': ''
                    // 此处可以理解为 '/ssa-ui/api' 代替了 target 里面的地址，后面的组件中，调用接口的时候直接用 /ssa-ui/api 替代
                    // 比如，调用 http://xx.xx.xx.xxx:xxxx/ssa-ui/api/query-engine/line-chart ，直接写 /ssa-ui/api/query-engine/line-chart 即可
                }
            },
            '/api': {
                target: 'http://127.0.0.1/applicationPlatform/public/index.php/index/',  //跨域地址
                changeOrigin: true,  // 是否跨域
                ws: true,  // 是否使用https
                pathRewrite: {
                    '^/api': ''
                    // 此处可以理解为 '/api' 代替了 target 里面的地址，后面的组件中，调用接口的时候直接用 /api 替代
                    // 比如，调用 http://xx.xx.xx.xxx:xxxx/api/row4 ，直接写 /api/row4 即可
                }
            }
        },
        before: app => {
        }
    }
}

