# ----------------------------------node react setting
FROM node:13.12.0-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g

COPY . /usr/src/app


EXPOSE 3000
CMD [ "npm", "run", "start" ]