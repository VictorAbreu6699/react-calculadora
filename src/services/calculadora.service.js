function calculadoraService(){
    const SOMA = '+', MULTIPLICACAO = '*', SUBTRACAO = '-', DIVISAO = '/';

    function calcular(num1, num2, op){
        let result;
        switch (op) {
            case SOMA:
                result = num1 + num2
                break;
            case SUBTRACAO:
                result = num1 - num2
                break;
            case DIVISAO:
                result = num1 / num2
                break;
            case MULTIPLICACAO:
                result = num1 * num2
                break;
            default:
                result = 0
                break;
        }

        return result
    }

    return [calcular, SOMA, MULTIPLICACAO, SUBTRACAO, DIVISAO]

}

export default calculadoraService;