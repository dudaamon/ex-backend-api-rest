const express = require('express');
const livros = require('./controladores/livros');
const rotas = express();

rotas.get('/livros', livros.consultarColecao);
rotas.get('/livros/:id', livros.consultarLivroID);
rotas.post('/livros', livros.adicionarLivro);
rotas.delete('/livros/:id', livros.removerLivro);

module.exports = rotas;