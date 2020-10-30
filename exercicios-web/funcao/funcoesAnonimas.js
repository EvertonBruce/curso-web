const soma = function (x, y) {
    return x + y
}

const imprimeResult = function (a, b, operacao = soma) {
    console.log(operacao(a, b)) 
    // Uma função anônima que recebe como parâmetro uma função (tendo como default a função 'soma')
}

imprimeResult(3, 4)
imprimeResult(3, 4, function (m, n) {
    return m - n
})
imprimeResult(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () { // Poderia ser escrito assim também 'falar() { conosle.log('Olá!') }'
        console.log('Ola!')
    }
}

pessoa.falar()
