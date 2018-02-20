FROM node:9.5.0-slim

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app
RUN npm install

#Bundle api
RUN mkdir -p /usr/src/api
COPY api /usr/src/api

#Bundle app source
COPY src /usr/src/app

EXPOSE 5000

CMD ["npm", "start"]