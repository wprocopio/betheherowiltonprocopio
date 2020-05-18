// conecção com banco pegando arquivo conection
const conection = require('../database/conecction');

module.exports = {
    async index(req, res) {
        
        // id da ong logada
        const ong_id = req.headers.authorization;

        const incidents = await conection('incidents').select('*')
        .where('ong_id', ong_id)
        .select('*');

        return res.json(incidents);
    }
}