function calculadora(n1, sinal, n2) {
    switch (sinal) {
        case '+':
            return n1 + n2
            break
        case '-': 
            return n1 - n2
            break
        case '*': 
            return n1 * n2
            break
        case '/': 
            return n1 / n2
            break
        default: 
            console.log('Opção inválida.')
    }
}

console.log(calculadora(3, '+', 5))
console.log(calculadora(3, '-', 5))
console.log(calculadora(3, '*', 5))
console.log(calculadora(3, '/', 5))
console.log(calculadora(3, 'T', 5))