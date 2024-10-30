import {BuildOptions} from "./types/build.types";

import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {
    const isDev = options.mode === 'development';

    return isDev ? {
        port: options.port ?? 4000,
        open: true,
    } : undefined;
}