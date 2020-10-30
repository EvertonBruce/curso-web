function criaObjeto(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(criaObjeto('Caneta', 1.5))
console.log(criaObjeto('Televisão', 1500.99))