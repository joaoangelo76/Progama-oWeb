exports.calcular = (numero1, numero2, operacao) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
};

exports.getOperador = (operacao) => {
    switch (operacao) {
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '*';
        case '/':
            return '/';
        default:
            return null;
    }
};
