FROM node:alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
