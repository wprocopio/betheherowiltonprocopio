const knex = require('knex');
const configuration = require('../../knexfile');

// oegando o arquivo knext init pois la ta setado as configuracoes do banco
const conection = knex(configuration.development);


module.exports = conection;