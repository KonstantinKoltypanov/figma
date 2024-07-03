import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/BuildTypes";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import  MiniCssExtractPlugin  from "mini-css-extract-plugin";

export function buildPlugins({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] {
    
    const isDev = mode === "development"
    const isProd = mode === "production"

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        
    ]
    
    if (isDev) {
        //Плагины для Dev сборки
        new ProgressPlugin()
    }

    if (isProd) {
        //плагины для Production
        plugins.push(
            new MiniCssExtractPlugin()
        )
    }
    if (analyzer) {
        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }

    return plugins
}