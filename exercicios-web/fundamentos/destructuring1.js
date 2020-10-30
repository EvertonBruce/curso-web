// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: a, idade: b} = pessoa
console.log(a, b)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa //vai dar erro
//console.log(ag, num)