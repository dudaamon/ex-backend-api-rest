const autenticarUsuario = (req, res, next) => {
    const { senha } = req.query;

    if (senha === 'cubos123') {
        next();
    } else {
        res.status(401).json({ mensagem: 'Senha incorreta' });
    }
};

module.exports = { autenticarUsuario };