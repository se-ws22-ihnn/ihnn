# dockerizing our app (alpine is a lightweight linux distro)
FROM node:18-alpine AS build

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

# nginx as web server - exposing port 80
FROM nginx:mainline-alpine-slim
COPY --from=build /usr/app/build /usr/share/nginx/html