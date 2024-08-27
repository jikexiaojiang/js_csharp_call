const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const entry = require("./src/entry");

module.exports = {
    entry,
    // target:"node",
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        library: "cppf_[name]",
        libraryTarget: "umd"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        fallback: {
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer")
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpeg|jpg|gif|png)$/,
                type: "asset/resource"
            },
            {
                test: /\.[tsx?|js]$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true
                }
            },
            {
                test: /\.[js|tsx?]$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: 3,
                                targets: {
                                    chrome: "60",
                                    firefox: "60",
                                    ie: "9"
                                },
                                modules: true
                            }
                        ]
                    ]
                }
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new ESLintPlugin({
        //     extensions: ["js", "ts"],
        //     fix: true
        // }),
        new CleanWebpackPlugin(),
        //用于自动加载模块，避免在代码中到处进行import或require操作
        //如下Buffer是希望在代码中使用的标识符，而后面的则是模块的名称，
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        // new webpack.ProvidePlugin({
        //     process: 'process/browser',
        // })
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html",
        //     minify: {
        //         collapseWhitespace: true,
        //         removeComments: true
        //     }
        // })
    ],
    optimization: {
        splitChunks: {
            minSize: 30 * 1024 * 1024,
            cacheGroups: {
                common: {
                    enforce: true,
                    test: /[\\/]common[\\/]/,
                    name: "common",
                    chunks: "all"
                },
                modules: {
                    enforce: true,
                    test: /[\\/]node_modules[\\/]/,
                    name: "modules",
                    chunks: "all"
                }
            }
        }
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        compress: true,
        port: 5000,
        host: "localhost",
        open: true,
        hot: true,
        clientLogLevel: "none",
        quiet: true,
        overlay: false,
        proxy: {
            // "/api": {
            //     target: "http://localhost:3000",
            // pathRewrite: {
            //     "^/api": ""
            // }
            // }
        }
    }
};
