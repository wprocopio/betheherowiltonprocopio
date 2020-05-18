// rota para login 

const conection = require('../database/conecction');

module.exports = {
    async create (req,res){
        const { id } =  req.body;

        const ong = await conection ('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return res.status(400).json({error : 'Nao foi encontrado Ong como este Id'})
        }
        return res.json(ong);
    }
}