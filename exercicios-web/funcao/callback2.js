const notas = [7.7, 6.5, 5.4, 3.8, 8.5, 7.1, 9.0]

// sem callback 
const notasBaixas1 = []
for (i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Com callback e arrow function

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)

// Com callback e arrow function e também separando a função que faz a filtragem dentro 
// de 'filter()' em uma constante separada que pode ser usada posteriormente, tornando 
// o código mais funcional.

const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)