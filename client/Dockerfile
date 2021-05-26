FROM node:14

RUN npm install -g http-server
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]