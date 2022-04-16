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

    function concatenarNumero(numAtual, numConcat){
        // Caso contenha 0 ou null, reinicia o valor.
        
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        // Primeiro digito for '.', concatena 0 antes do ponto.
        if(numConcat === '.' && numAtual === ''){
            return '0.'
        }

        // Caso '.' digitado e já contenha um '.', apenas retorna.
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual
        }

        return numAtual + numConcat;
    }

    return [calcular, concatenarNumero, SOMA, MULTIPLICACAO, SUBTRACAO, DIVISAO]

}

export default calculadoraService;