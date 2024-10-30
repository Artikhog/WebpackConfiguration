import {WebpackConfiguration} from "webpack-cli";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/build.types";

export function buildPlugins(options: BuildOptions): WebpackConfiguration['plugins'] {
    return [
        new HtmlWebpackPlugin({template: options.paths.html})
    ]
}