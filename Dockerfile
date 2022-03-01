FROM node:16-alpine

WORKDIR /usr/src/app

COPY src/. .

EXPOSE 3000

CMD ["node", "server.js"]