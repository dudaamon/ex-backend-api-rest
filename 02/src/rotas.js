const express = require('express');
const { listarConvidados, adicionarConvidado, removerConvidado } = require('./controladores/convidados');
const rotas = express();

rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', adicionarConvidado);
rotas.delete('/convidados/:nome', removerConvidado);

module.exports = rotas;