import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/build.types";
import {buildDevServer} from "./buildDevServer";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

export function buildWebpack(options: BuildOptions) {
    const isDev = options.mode === 'development';

    const config: Configuration = {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : 'source-map',
        devServer: buildDevServer(options),
    }
    return config;
}