//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../models');

/**
 * CRUD
 */
 class EstudanteController {
    //async: espera resolver tudo dentro do método antes do envio da resposta
    static async pegaTodosOsEstudantes(req, res) {
        try {
            //await: aguarda até receber a resposta do BD
            const todosOsEstudantes = await database.album_digitals.findAll();
            // return res.status(200).json(todosOsEstudantes);
            res.render('estudantesView',{todosOsEstudantes});
        
        } catch (error) {
            return res.status(500).json(error.message);
            
            
        }
    }
    
    static async album(req, res) {
        res.render('form-album-digital');
    }
    static async index(req, res) {
        res.render('index');
    }
    
    static async pegaUmEstudante(req, res) {
        const { id } = req.params;
        try{
            const umEstudante = await database.Estudantes.findOne( { 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(umEstudante);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaEstudante(req, res) {
        const novoEstudante = req.body;
        console.log(req.body);
        try{
            const novoEstudanteCriado = await database.Estudantes.create(novoEstudante);
            return res.status(200).json(novoEstudanteCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaEstudante(req, res) {
        const novasInfosEstudante = req.body;
        const { id } = req.params;
        try{
            await database.Estudantes.update(novasInfosEstudante, { where: { id: Number(id) } });
            const estudanteAtualizado = await database.Estudantes.findOne( { where: { id: Number(id) } });
            return res.status(200).json(estudanteAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagarEstudante(req, res) {
        const { id } = req.params;
        try{
            await database.Estudantes.destroy({ where: { id: Number(id) } });
            return res.status(200).json( { mensagem: `id ${id} deletado`} );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }  

}

module.exports = EstudanteController