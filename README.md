#  Node.js CRUD API
Simple Node.js API for CRUD functions

## Get started
Use *npm* and install the required dependencies with the `npm i` command inside each homework folder.

**Docker**

I created a docker-compose file to start the application. I set up a Node.js backend, Postgres database and a Pgadmin interface for the database.

You have to install *docker* and *docker-compose* to run and set up the containers: `docker-compose up --build`
- The Node API is on `localhost:5000` by default
- PgAdmin can be accessed in `localhost:5050`  *email: admin@example.com* *password: admin*

PgAdmin setup:

*\*Right click\** on Servers -> Create -> Server... . Choose a name in General (db). Set up the Connection:

	Host name/address: database
	Port: 5432
	Maintenance database: postgres
	username: admin
	password: admin

**NPM**

You can also run the npm scripts from the root directory

Use `npm start` to start the server. Run `npm run prod` to execute the code inside the `/dist` folder.

You can check for lint errors by using `npm run lint` or fix them with `npm run lint-fix`.

## APIs
I exported a Postman API Collection in `/postman.json`
