function imprimeImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let aux = 0
        aux = inicio
        inicio = fim
        fim = aux
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 1){
            console.log(i)
        }
    }
}

imprimeImpares(10, 1)