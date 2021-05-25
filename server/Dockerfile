FROM node:latest

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app/server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]

