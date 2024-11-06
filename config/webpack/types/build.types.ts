export interface BuildOptions {
    port: number,
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
}

export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    output: string;
    public: string;
}