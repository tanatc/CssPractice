const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        index: './src/index.js',
        // indexhtml: './src/css_01/css_01.html',
        css_01: './src/css_01/css_01.js'
    },
    // entry: ['./src/index.js', './src/index.html'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false,

                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',

                    }
                ]

            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb就会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonJs解析，解析时会出问题
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    // 给图片重命名，取图片的hash前10位，
                    // [ext]取原来文件名
                    name: "[name].[ext]",
                    outputPath: 'img',
                },

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'inedx.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: './src/test.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'css_practice.html',
            template: './src/css_practice/csspractice_1.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'css_01.html',
            template: './src/css_01/css_01.html',
            chunks: ['css_01']
        }),
    ],
    mode: 'development',
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        noInfo: true, // only errors & warns on hot reload
        compress: true,
        open: true,
        port: 9000,
        host: 'localhost'
    },
}