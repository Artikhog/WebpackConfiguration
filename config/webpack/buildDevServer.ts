import {BuildOptions} from "./types/build.types";

import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {

    return options.isDev ? {
        port: options.port ?? 4000,
        open: true,
    } : undefined;
}