const calculadora = require('../calculadora/calculadora');

exports.mostrarFormulario = (req, res) => {
    res.render('index');
};

exports.calcular = (req, res) => {
    const { numero1, numero2, operacao } = req.body;
    
    if (isNaN(numero1) || isNaN(numero2)) {
        return res.render('index', { erro: 'Por favor, insira valores numéricos válidos.' });
    }

    const resultado = calculadora.calcular(numero1, numero2, operacao);
    const operador = calculadora.getOperador(operacao);
    
    res.render('resultado', { numero1, numero2, operador, resultado });
};
