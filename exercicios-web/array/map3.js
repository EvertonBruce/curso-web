Array.prototype.map2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const parsea = o => JSON.parse(o)
const valorPreco = o => o.preco

const precos= carrinho.map2(parsea).map2(valorPreco)
console.log(precos)