import webpack from "webpack";

import {buildDevServer} from "./BuildDevServer";
import { buildLoaders } from "./BuildLoaders";
import { buildPlugins } from "./BuildPlugins";
import { buildResolvers } from "./BuildResolvers";
import { BuildOptions } from "./types/BuildTypes";

export function BuildWebpack (options: BuildOptions): webpack.Configuration {
    
    const { mode, paths } = options
    
    const isDev = mode === 'development'

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: "build.[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map': false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}