/*let vetorInteiro = [2, 4, 5, 8,]
let vetorString = ['uva', 'carro', 'panda', 'queijo',]
let vetorDouble = [1.3, 4.2, 8.1, 9.3]

console.log(vetorInteiro.concat(vetorString.concat(vetorDouble)))

console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))*/
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))