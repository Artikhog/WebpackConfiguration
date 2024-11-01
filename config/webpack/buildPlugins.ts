import {WebpackConfiguration} from "webpack-cli";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/build.types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): WebpackConfiguration['plugins'] {
    return [
        new HtmlWebpackPlugin({template: options.paths.html}),
        !options.isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        })
    ]
}