import {WebpackConfiguration} from "webpack-cli";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/build.types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): WebpackConfiguration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(options.paths.public, 'index.html'),
            favicon: path.resolve(options.paths.public, 'favicon.ico'),
        }),
        !options.isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        })
    ]
}