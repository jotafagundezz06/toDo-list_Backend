// Importa o módulo 'express' para utilizar no projeto
const express = require('express');

// Importa o módulo 'mongoose' para trabalhar com o MongoDB
const mongoose = require('mongoose');

// Importa o módulo 'dotenv' para carregar variáveis de ambiente a partir de um arquivo '.env'
require('dotenv').config();

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta do servidor a partir de uma variável de ambiente, ou utiliza a porta 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor Express para escutar conexões na porta especificada
app.listen(PORT, () => console.log(`Connected in: ${PORT}`));
