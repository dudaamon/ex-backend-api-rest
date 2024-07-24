let { convidados } = require('../dados/bancodedados')

const listarConvidados = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.json(convidados);
    };

    const encontrarConvidado = convidados.find((convidado) => {
        return nome === convidado;
    });

    if (!encontrarConvidado) {
        return res.json({ mensagem: 'Convidado não encontrado.' });
    };
};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.json({ mensagem: 'Preencha corretamente as informações.' })
    };

    const convidado = convidados.find((convidado) => {
        return nome === convidado;
    });

    if (convidado) {
        res.status(400).json({ mensagem: 'Esse nome já existe, adicione o sobrenome.' });
    };

    convidados.push(nome);
    return res.json({ mensagem: 'Convidado adicionado.' });
};

const removerConvidado = (req, res) => {
    const { nome } = req.params;
    const indice = convidados.indexOf(nome);

    if (indice !== -1) {
        convidados.splice(indice, 1);
        return res.json({ mensagem: 'Convidado removido da lista.' });
    } else {
        return res.json({ mensagem: 'Convidado não encontrado.' });
    };

};

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
};