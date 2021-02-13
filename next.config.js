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
