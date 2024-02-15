// Importa o módulo 'express' para utilizar no projeto
const express = require('express');

// Importa o módulo 'mongoose' para trabalhar com o MongoDB
const mongoose = require('mongoose');

const routes = require("./routes/toDoRoute")

// Importa o módulo 'dotenv' para carregar variáveis de ambiente a partir de um arquivo '.env'
require('dotenv').config();

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta do servidor a partir de uma variável de ambiente, ou utiliza a porta 3000 como padrão
const PORT = process.env.PORT || 3000;

// Conecta ao banco de dados MongoDB usando a URL fornecida no arquivo de variáveis de ambiente (.env)
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));

  app.use(routes)

// Inicia o servidor Express para escutar conexões na porta especificada
app.listen(PORT, () => console.log(`Connected in: ${PORT}`));
