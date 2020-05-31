// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL ,
    migrations:{
      directory:'./src/database/migrations'
    },
    seeds:{
      directory:'./src/database/seeds'
    },
    useNullAsDefault : true,
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./src/database/migrations',
      tableName:'knex_migrations'
    },
    seeds:{
      directory:'./src/database/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./src/database/migrations',
      tableName:'knex_migrations'
    },
    seeds:{
      directory:'./src/database/seeds'
    },
  }

};
