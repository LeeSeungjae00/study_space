//1. Module Bundler
// 2. Static Assets 생성 <- 여러가지 CSS, js, html 파일을 쉽게말해 압축된 상태로 출력
//npx webpack --wactch 소스에파일이 변경이 감지되면 자동으로 변경해줌
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // mode : 'development',
    entry : {
        index : "./source/index.js",
        about : "./source/about.js"
    },
    output : {
        path : path.resolve(__dirname, "public"),
        filename : '[name]_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : './source/index.html',
            filename : './index.html',
            chunks : ['index']
        }),
        new HtmlWebpackPlugin({
            template : './source/about.html',
            filename : './about.html',
            chunks : ['about']
        })
    ]
}