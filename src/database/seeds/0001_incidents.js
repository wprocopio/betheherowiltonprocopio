
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('incidents').del()
    .then(function () {
      // Inserts seed entries
      //title, description, valor, ong_id,
      return knex('incidents').insert([
        { title: 'CACHORO ATROPELADO', description : 'DOG ATROPELADO NA 13 DE MAIO',valor : '12.00',ong_id : 'e9df4129'},
        { title: 'CURURU ATROPELADO',  description : 'CURURU DOIDO E MALUCO ATROPELADO NA 13 DE MAIO',valor : '12.00',ong_id : 'e9df4129'},
        { title: 'MACACO ATROPELADO',  description : 'MACACO MALUCO ATROPELADO NA 13 DE MAIO',valor : '12.00',ong_id : 'e9df4129' }
      ]);
    });
};
