import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/BuildTypes";

export function buildLoaders( { mode }:BuildOptions ): ModuleOptions['rules']  {
    
    const isProd = mode === 'production'

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',

            "css-loader",
            
            "sass-loader",
        ]
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const fontLoader =  {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
      return [
        fontLoader,
        scssLoader,
        assetsLoader,
        svgLoader,
        tsLoader,
    ]
}