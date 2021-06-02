# Introduction

This is a repo for cosmos odyssey application. 

live link: https://mysterious-shelf-95293.herokuapp.com/

## Installation

`'Important'` add .end to server folder with mongodb cloud cluster. 
`Example:` MONGODB_URI=mongodb+srv://<user>:<passowrd>@cluster0.mungu.mongodb.net/cosmosOdyssey?retryWrites=true&w=majority

1. Clone this Git repository: `git clone https://github.com/aquafinatrippy/cosmos-odyssey.git`

Run with docker. At root folder run: `docker-compose up --build`

`Run with node version 13+ (without docker)`. 
Open up two terminal windows.
`On first one`, 'cd server', 'npm install' and 'npm run start'. 
`Second terminal window`, 'cd client', 'npm install' and 'npm run serve'

## ENV setup for db

At server folder create new .env file and in there add Mongodb connection string: MONGODB_URI={here goes connection string}

## Using this repo

Open in browser: `http://localhost:8080/`

Running e2e test made possible by Cypress:

1. `cd frontend`: Go to client folder
2. `npm run test:e2e`: Starts e2e testing

Run backend unit test:

1. `cd server`: Go to server folder
2. `npm run test`: Starts tests

## To push live

git subtree push --prefix server heroku master

## Extra info

Front-end: Vue

Back-end: Express (es6)
