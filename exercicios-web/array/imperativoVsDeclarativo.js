const alunos = [
    { nome: 'Claudio', nota: 8.34 },
    { nome: 'Luna', nota: 4.75 },
    { nome: 'Harry', nota: 3.5 },
    { nome: 'Hermione', nota: 9.14 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)