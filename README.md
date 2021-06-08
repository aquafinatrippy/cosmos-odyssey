# Introduction

This is a repo for cosmos odyssey application. 

`Few things are under development. Application isnt fully finished`

live link: https://space-odyssey-travel-system.herokuapp.com/



## Installation

*** With Docker
1. Clone this Git repository: `git clone https://github.com/aquafinatrippy/cosmos-odyssey.git`

Run with docker. At root folder run: `docker-compose up --build`

*** With terminals
`Run with node version 13+ (without docker)` 

Open up two terminal windows.
1. `On first one`, 'cd server', 'npm install' and 'npm run start'. 
2. `Second terminal window`, 'cd client', 'npm install' and 'npm run serve'

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

## Documentation

API documentation is in going, but preview is up how its going to look. Path to it is: /api-docs

## Extra info

Front-end: Vue

Back-end: Express (es6)
