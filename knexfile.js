module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/**DB_NAME_HERE**',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/**TEST_DB_NAME_HERE**',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/test'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './API/db/migrations'
    },
    seeds: {
      directory: './API/db/seeds/dev'
    },
    useNullAsDefault: true
  }
};