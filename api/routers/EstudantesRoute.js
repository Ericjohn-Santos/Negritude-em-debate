

const { Router } = require('express');
const EstudanteController = require('../controllers/EstudanteController');
const auth = require('../middleware/auth');

//Iniciando o Router do express
const router = Router();

router.get('/estudantes', EstudanteController.pegaTodosOsEstudantes);
router.get('/estudantes/:id', EstudanteController.pegaUmEstudante);
router.post('/estudantes', EstudanteController.criaEstudante);
router.put('/estudantes/:id', EstudanteController.atualizaEstudante);
router.delete('/estudantes/:id', EstudanteController.apagarEstudante);

module.exports = router;