// Importa a função Router do módulo 'express'
const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/toDocontroller");

// Cria uma instância de Router, que será usada para definir rotas
const router = Router();

// Define uma rota GET na raiz ('/') que retorna um objeto JSON com uma mensagem
router.get('/', getToDo);

router.post('/save', saveToDo);

// Exporta o objeto router para ser usado em outros arquivos
module.exports = router;




//const { Router } = require("express");: Importa a função Router do módulo express, que será usada para criar instâncias de rotas.

//const router = Router();: Cria uma instância de Router, que será usada para definir rotas específicas para este módulo.

//router.get('/', (req, res) => { res.json({ message: "Hi there..." }); });: Define uma rota GET na raiz ('/') usando o método get() do objeto router. Quando um cliente faz uma solicitação GET para a raiz, esta função de retorno de chamada é executada, que responde com um objeto JSON contendo a mensagem "Hi there...".

// module.exports = router;: Exporta o objeto router para que ele possa ser importado e usado em outros arquivos, permitindo que as rotas definidas neste arquivo sejam usadas em outros locais da aplicação Express.