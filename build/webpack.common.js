import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
// import CopyPlugin from 'copy-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

// const {
//   DefinePlugin
// } = webpack;

export const entry = {
  index: './src/index'
};

export const plugins = [
  new LodashModuleReplacementPlugin(),
  new FaviconsWebpackPlugin({
    logo: 'src/images/logo.png',
    mode: 'auto',
    prefix: '',
    inject: true,
    cache: true
  }),
  // new CopyPlugin({
  //   patterns: [
  //     {
  //       from: 'public',
  //       to: './',
  //       globOptions: {
  //         ignore: ['**/index.html']
  //       }
  //     }
  //   ]
  // }),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    inject: true
  }),
  new ESLintPlugin()
];

export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'ts-loader'
        }
      ]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            esModule: true,
            modules: {
              mode: (resourcePath) => {
                if (resourcePath.includes('/src/styles/')) {
                  return 'global';
                }

                return 'local';
              },
              localIdentName: '[name]--[local]--[hash]',
              localIdentHashDigestLength: 5,
              exportLocalsConvention: 'asIs'
            }
          }
        },
        // Compiles Sass to CSS
        'sass-loader'
      ]
    },
    {
      test: /\.svg/,
      type: 'asset/inline'
    },
    {
      test: /\.(jpg|jpeg|png|gif|mp3)$/,
      type: 'asset/resource'
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false // https://github.com/webpack/webpack/issues/11467
      }
    }
  ]
};

export const resolve = {
  extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@components': path.resolve('src/components'),
  //   '@constants$': path.resolve('src/constants/index.js'),
  //   '@copy$': path.resolve('src/copy/index.ts'),
    '@images': path.resolve('src/images'),
  //   '@pages': path.resolve('src/components'),
    '@storybook': path.resolve('src/storybook/components'),
  //   '@styles': path.resolve('src/styles'),
  //   '@utils$': path.resolve('src/utils/index.js'),
  //   '@uiTypes$': path.resolve('src/storybook/types.ts')
  }
};

export const output = {
  filename: '[name].bundle.js',
  path: path.resolve('dist'),
  assetModuleFilename: 'images/[hash][ext][query]',
  clean: true
};

export const devServer = {
  // static: {
  //   directory: path.join(__dirname, 'public'),
  // },
  compress: true,
  port: 9000,
};

export const optimization = {
  splitChunks: {
    chunks: 'all'
  }
};
