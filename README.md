
# Express-React-Redux-Boilerplate

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [PostgreSQL](https://www.postgresql.org/)
* [Node.js](https://nodejs.org/en/)


### Installing

A step by step series of examples that tell you how to get a development env running from terminal.

Instructions on how to clone a repo [here](https://help.github.com/articles/cloning-a-repository/)

Clone down [this](https://github.com/goodalls/express-react-redux-boilerplate) repo.

To install the dependencies:

```
npm install
```

To fire up a development and api server:

```
npm start
```

Once the server is running, you can visit:

* Open http://localhost:3000 to view client in the browser.
* Open http://localhost:3001 for api requests.


## Running the tests

there are two automated testing systems in use in this project. The front end uses Jest/Enzyme and the back-end uses Mocha/Chai. To run the testing suite use the following script for each respectivly.


* to test the front-end with Jest/Enzyme
  * automaticaly searches the ./src folder for files with the correct extension ex. ./src/components/App/App.test.js
```
npm test
```

* to test the Back-End with Mocha and Chai
  * only uses the ./src/db/test/routes.spec.js file

```
npm run test-api
```

## Deployment

Set up to use Continuous integration with TravisCI and Heroku (needs configured to your project)

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) 
* [express](https://expressjs.com/)
* [knex](https://knexjs.org/)
* [Redux](https://redux.js.org/)


## Authors

* **Jeff Goodall** - *Front End Developer* - [GitHub](https://github.com/goodalls)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Carole Wood** - *[mkibags.com](mkibags.com)*




