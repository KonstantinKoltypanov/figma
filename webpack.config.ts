import path from "path";
import {Configuration} from "webpack";

import {BuildWebpack} from "./config/build/BuildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/BuildTypes";

interface EnvVariables {
    mode: BuildMode
    port: number
    analyzer: boolean
}


export default (env: EnvVariables) => {
    
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const config: Configuration = BuildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths,
        analyzer: env.analyzer ?? false
    });
    return config
}