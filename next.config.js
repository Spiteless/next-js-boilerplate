const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');


module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
            );
            return config;
        }
    }
  }

  return {
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            return config;
        }
  }
};
