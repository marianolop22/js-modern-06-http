//configuracion del webpack para el build

const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    mode: 'production',
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin()]
    },
    output: {
        filename: 'main.[contentHash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            },
            {   //esto es para levantar los estilos
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].[contentHash].css', //le agrega el hash
            ignoreOrder: false
        }),
        new CopyPlugin ({
            patterns: [
            {
                from: 'src/assets',
                to: 'assets/'
            }
        ]}),
        new MinifyPlugin(),
        new CleanWebpackPlugin()
    ]

}