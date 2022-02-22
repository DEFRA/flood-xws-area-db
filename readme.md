# flood-xws-area-db

Database and migrations scripts for the XWS Area schema

## Environment variables

| name                    | description                    | required   | valid                         |
| ----------              | ------------------             | :--------: | :---------------------------: |
| DATABASE_URL            | Database connection string     | yes        |                               |


## Getting started

Pre-requisites:
1. [Postgres](https://www.postgresql.org/) v12 with plugins PostGIS and uuid-ossp
2. [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) GDAL 3.0.4


### Mac Users

The easiest way to use PG on a Mac is with [postgresapp](https://postgresapp.com/downloads.html).

Choose PostgreSQL 12.8 / PostGIS 3.0.3.

Postgresapp also comes bundled with ogr2ogr meaning you don't have to install that separately.

You'll need [make them available on your $PATH](https://postgresapp.com/documentation/cli-tools.html). You can do this by adding to your `.profile` or by following the instructions in the link.

### Initialising the xws area database

Once `PG`, `psql`, `PostGIS` and `ogr2ogr` are available we can [create our initial database](https://www.postgresql.org/docs/9.0/sql-createdatabase.html).

Do this using your db client or via `psql`:

`CREATE DATABASE xws_area;`

Now we are ready to prepare the database.

First ensure the `DATABASE_URL` environment variable is set.

Then, from the root of this project, execute the following commands.

1. Run the db migrations

`npx knex migrate:up`

2. Seed the db

`npx knex seed:run`

3. Import the Alert and Warning Target Areas.

`cd bin`

`./populatedb`


### One line
`npx knex migrate:down && npx knex migrate:up && npx knex seed:run && cd bin && ./populatedb && cd ..`

### Other useful commands

[Knex](https://knexjs.org/) is used for db migrations.

Create a new migration file
`npx knex migrate:make <name>`

Create a new seed file
`npx knex seed:make seed_name`

To run the next migration that has not yet been run
`npx knex migrate:up`

To run the specified migration that has not yet been run
`npx knex migrate:up <name>`

Run all seed files
`npx knex seed:run`

To undo the last migration that was run
`npx knex migrate:down`

To undo the specified migration that was run
`npx knex migrate:down <name>`

### GOV.UK PaaS

https://docs.cloud.service.gov.uk/deploying_services/postgresql/#set-up-a-postgresql-service

E.g.

`$ cf marketplace -e postgres`
`$ cf create-service postgres tiny-unencrypted-12 xws-area-db -c '{"enable_extensions": ["postgis"]}'`

#### Initialise the DB

From https://docs.cloud.service.gov.uk/deploying_services/postgresql/#non-paas-to-paas

`$ pg_dump --host localhost --file xws_area.sql xws_area`

`$ cf conduit xws-area-db -- psql < xws_area.sql`

`$ \dt *.*`

### Resources

[Knex](https://knexjs.org/)

[Knex migrations cli](https://knexjs.org/#Migrations)

[Knex cheatsheet](https://devhints.io/knex)


The shape zip files come from:

* https://data.gov.uk/dataset/0d901c4a-6e1a-4f9a-9408-73e0c1f49dd3/flood-warning-areas
* https://data.gov.uk/dataset/7749e0a6-08fb-4ad8-8232-4e41da74a248/flood-alert-areas
