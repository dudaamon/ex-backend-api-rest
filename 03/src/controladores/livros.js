let { identificarLivro, livros } = require('../dados/bancodedados');

const consultarColecao = (req, res) => {
    res.status(200).json(livros);
};

const consultarLivroID = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(404).json({ Mensagem: 'Não encontrado.' });
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: 'Não existe.' });
    }

    return res.status(200).json(livroEncontrado);
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'Título é obrigatório' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'Autor é obrigatório' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'Ano é obrigatório' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'Número de páginas é obrigatório' });
    }

    const livro = {
        id: identificarLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    };

    livros.push(livro);
    return res.status(201).json(livro);
};

const alterarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'Título é obrigatório' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'Autor é obrigatório' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'Ano é obrigatório' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'Número de páginas é obrigatório' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não cadastrado' });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(203).send();
};

const removerLivro = (req, res) => {
    const { id } = req.params;

    if (!Number(id)) {
        return res.status(400).json({ Mensagem: 'Não existe livro a ser removido para o ID informado.' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não encontrado.' });
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    });

    return res.status(200).json({ Mensagem: 'Livro removido.' });
};


module.exports = {
    consultarColecao,
    consultarLivroID,
    adicionarLivro,
    alterarLivro,
    removerLivro
};