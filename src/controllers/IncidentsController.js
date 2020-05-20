// conecção com banco pegando arquivo conection
const conection = require('../database/conecction');


module.exports = {

    async index(req, res) {
        const {page = 1 } = req.query;
        
        const [count] = await  conection('incidents').count();
        
        const incidents = await  conection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        .limit(5)
        .offset((page - 1 ) * 5 )
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);
        
        console.log(count);

        res.header('X-Total-Count',count['count']);

        return res.json(incidents);

    },    
    async create(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        // desetruturacao do java script para madnar apenas os campos corretos  
        const { title, description, valor } = req.body;
        // gerando o ID randomico
        const ong_id = req.headers.authorization;

        console.log(title, description, valor, ong_id);

        await conection('incidents').insert({
            title, description, valor, ong_id,
        });       
        
        return res.json( 'Rergistro inserido' );
    },
    async delete(req,res){
        // pegando o id q vem la do parametro 
        const { id } = req.params;
        // id da ong logada
        const ong_id = req.headers.authorization;

        console.log(id , ong_id);

        const incident = await conection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();
        
        if(incident.ong_id != ong_id) {
            return res.status(401).json({error : 'Operation not Permited'});            
        }
        await conection('incidents').where('id',id).delete();
        
        return res.status(204).send();
    }

};