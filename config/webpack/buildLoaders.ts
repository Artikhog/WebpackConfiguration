import {BuildOptions} from "./types/build.types";
import {ModuleOptions} from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}