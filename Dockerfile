# dockerizing our app
FROM node:alpine

# using /usr/app as work directory
WORKDIR /usr/app

# copy package.json
COPY ./package.json ./

# install dependencies
RUN npm install

# copy everything else
COPY ./ ./

# start command
CMD ["npm", "start"]