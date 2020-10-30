// Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90.2,
    endereco: {
        rua: 'Rua Liroleranei',
        numero: 167
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)