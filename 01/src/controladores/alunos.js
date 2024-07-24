let { identificarAlunos, alunos } = require('../dados/bancodedados');

const listarAlunos = (req, res) => {
    res.status(200).json(alunos);
}

const filtrarAlunos = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ Mensagem: 'Aluno não encontrado' });
    }

    if (isNaN(id)) {
        return res.status(404).json({ Mensagem: 'Insira um ID válido.' });
    }

    return res.status(200).json(aluno);

}

const cadastrarAlunos = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'Nome é obrigatório' });
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'Sobrenome é obrigatório' });
    }

    if (!idade) {
        return res.status(400).json({ mensagem: 'Idade é obrigatório' });
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'Curso é obrigatório' });
    }

    const aluno = {
        id: identificarAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(aluno);
    return res.status(201).json(aluno);
};

const deletarAlunos = (req, res) => {
    const { id } = req.params;

    if (!Number(id)) {
        return res.status(400).json({ Mensagem: 'Insira um ID válido.' });
    }

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });

    return res.status(204).send();
};

module.exports = {
    listarAlunos,
    filtrarAlunos,
    cadastrarAlunos,
    deletarAlunos
};