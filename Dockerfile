FROM node:20

WORKDIR /usr/src/app

ADD ./package*.json ./

RUN npm install

ADD . .

EXPOSE 8088
CMD ["node", "server.js"]
