const notas = [ 7.4, 8.6, 9.1, 6.7, 6.5 ]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    peso: 82.2,
    idade: 32
} 

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}