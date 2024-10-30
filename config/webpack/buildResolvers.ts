import {BuildOptions} from "./types/build.types";
import {WebpackConfiguration} from "webpack-cli";

export function buildResolvers(options: BuildOptions): WebpackConfiguration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}