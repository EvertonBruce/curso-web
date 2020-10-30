// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
} 
imprimirSoma(2, 5)

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 9))

// Retorno implicto
const subtracao = (a, b) => a - b

console.log(subtracao(50, 30))

const imprimir2 = a => console.log(a)

imprimir2('Michael Douglas')