# dockerizing our app (alpine is a lightweight linux distro)
FROM node:alpine

# using /usr/app as work directory
WORKDIR /usr/app

# copy package.json
COPY ./package.json ./

# install dependencies - (exact version) vs (latest version)
# RUN npm ci
RUN npm install

# copy everything else
COPY ./ ./

# build the app
RUN npm run build

# tell the app that it's running in production
ENV NODE_ENV production

# expose port 3000
EXPOSE 3000

# let npx serve the build app
CMD [ "npx", "serve", "build" ]

# start command // dev mode
# CMD ["npm", "start"]