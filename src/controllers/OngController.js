// conecção com banco pegando arquivo conection
const conection = require('../database/conecction');
const crypto = require ('crypto');


module.exports = {
    
    async index (req,res)  {
        // crio uma variavel ongs para fazere o select de tudo
        try {
            const ongs = await conection('ongs').select('*');
        return res.json(ongs);    
        } catch (error) {
            console.log('ERRO'+error)
        }
        
      },
    
    async create(req, res) {
        // desetruturacao do java script para madnar apenas os campos corretos  
        const { name, email, whatsapp, city, uf } = req.body;
        // gerando o ID randomico
        const id = crypto.randomBytes(4).toString('HEX');

        await conection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });

        return res.json({ id });
    }

}