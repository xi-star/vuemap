module.exports = {
    publicPath: "./",
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "坐标拾取";
                return args;
            })
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            '/': {
                target: 'http://localhost:5244',
                changeOrigin: true,
                ws: true,
                logLevel: "debug",
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
};