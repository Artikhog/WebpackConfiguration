export interface BuildOptions {
    port: number,
    paths: BuildPaths;
    mode: BuildMode;
}

export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
}