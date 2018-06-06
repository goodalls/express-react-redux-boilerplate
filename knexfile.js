module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/dev'
    },
    useNullAsDefault: true
  }
};