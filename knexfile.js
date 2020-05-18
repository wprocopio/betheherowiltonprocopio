// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // filename : './src/database/db.sqlite' client:'sqlite3'
      database: 'hero',
      user:     'postgres',
      password: '1t4rg3t'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault : true,
  },

  staging: {
    client: 'postgresql',
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
    client: 'postgresql',
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
