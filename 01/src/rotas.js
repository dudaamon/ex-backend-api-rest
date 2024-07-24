const express = require('express');
const alunos = require('./controladores/alunos');
const intermediarios = require('./intermediarios');
const rotas = express();

rotas.get('/alunos', intermediarios.autenticarUsuario, alunos.listarAlunos);
rotas.get('/alunos/:id', intermediarios.autenticarUsuario, alunos.filtrarAlunos);
rotas.post('/alunos', intermediarios.autenticarUsuario, alunos.cadastrarAlunos);
rotas.delete('/alunos/:id', alunos.deletarAlunos);

module.exports = rotas;