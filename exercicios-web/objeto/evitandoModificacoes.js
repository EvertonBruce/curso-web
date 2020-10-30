// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Lápis',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Estensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar.'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = Object.seal({
    nome: 'Claudia',
    idade: 32
})
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 24
console.log(pessoa)

// Object.freeze = selado + valores constantes