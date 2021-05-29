FROM node:14

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .


EXPOSE 8080

CMD [ "npm", "run", "serve" ]