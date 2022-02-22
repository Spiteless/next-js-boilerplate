const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withImages = require('next-images');
const path = require("path");

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);


module.exports = (phase, { defaultConfig }) => {
    return withTM(withImages({
        esModule: true,
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@mui/styled-engine': '@mui/styled-engine-sc',
                "react": path.resolve('./node_modules/react')
            };
            config.module.rules.push(
                {
                  test: /\.(graphql|gql)$/,
                  exclude: /node_modules/,
                  loader: 'graphql-tag/loader'
                },
                 {
                    test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'static/'
                        }
                      }
                    ]
                }
            )
            return config;
        }
    }));
};
