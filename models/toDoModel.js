// Importa o módulo mongoose para trabalhar com o MongoDB
const mongoose = require('mongoose');

// Define um esquema (schema) para os documentos da coleção 'ToDo'
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true // Indica que este campo é obrigatório
    }
});

// Cria e exporta um modelo (model) baseado no esquema 'todoSchema' para a coleção 'ToDo' no MongoDB
module.exports = mongoose.model('ToDo', todoSchema);

//const mongoose = require('mongoose'): Importa o módulo mongoose, que fornece uma maneira simples e flexível de trabalhar com o MongoDB no Node.js.

// const todoSchema = new mongoose.Schema({ ... }): Define um esquema (schema) para os documentos que serão armazenados na coleção 'ToDo' no MongoDB. O esquema especifica a estrutura dos documentos, incluindo os campos e os tipos de dados que podem ser armazenados.
// text: { type: String, required: true }: Define um campo chamado 'text' no esquema, que é do tipo String e obrigatório (required: true).
// module.exports = mongoose.model('ToDo', todoSchema): Cria um modelo (model) baseado no esquema 'todoSchema' para a coleção 'ToDo' no MongoDB. Um modelo é uma classe que é usada para interagir com a coleção associada no banco de dados MongoDB. O modelo é exportado para que possa ser usado em outros arquivos da aplicação.
