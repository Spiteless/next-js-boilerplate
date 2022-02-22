ARG NODE_VERSION
ARG PORT

FROM node:${NODE_VERSION} as intermediate

RUN mkdir ./swap

## Install app dependencies
COPY package*.json ./swap/


# Install deps and wipe clean
RUN cd ./swap && yarn install \
   && npm cache clear --force \
   && rm -rf ~/.npm \
   && rm -rf /var/lib/apt/lists/*

# Bundle app source (see dockerignore)
COPY . ./swap

RUN cd ./swap && yarn build

####
## INNER
####
FROM node:${NODE_VERSION}-alpine

# Create app directory
WORKDIR /usr/src/app

COPY --from=intermediate /swap/node_modules /usr/src/app/node_modules
COPY --from=intermediate /swap/.next /usr/src/app/.next
COPY --from=intermediate /swap/public /usr/src/app/public
COPY --from=intermediate /swap/package.json /usr/src/app/
COPY --from=intermediate /swap/next.config.js /usr/src/app/

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
