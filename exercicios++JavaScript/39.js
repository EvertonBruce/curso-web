let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

function trocaElementos(vetor1, vetor2) {
    if (vetor1.length === vetor2.length) {
        let aux = []
        aux = vetor1
        vetor1 = vetor2
        vetor2 = aux
        console.log(`Vetor 1: ${vetor1}`)
        console.log(`Vetor 2: ${vetor2}`)
    } else {
        console.log('Tamanhos dos vetores diferentes')
    }
}

trocaElementos(vetor1, vetor2)