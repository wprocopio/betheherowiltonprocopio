// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL ,
    migrations:{
      directory:'./src/database/migrations'
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
    }
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
    }
  }

};
