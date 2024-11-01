import path from 'path';
import * as webpack from 'webpack';
import {buildWebpack} from "./config/webpack/buildWebpack";
import {BuildMode, BuildOptions, BuildPaths} from "./config/webpack/types/build.types";

interface envVariables {
    port: number,
    mode: BuildMode,
}

export default (env: envVariables): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const options: BuildOptions = {
        port: env.port,
        mode: env.mode ?? 'development',
        paths: paths,
        isDev: env.mode !== 'production',
    }

    return buildWebpack(options);
}

