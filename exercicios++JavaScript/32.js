function calcMedia(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    let media = soma / (vetor.length - 1)
    return media
}

console.log(calcMedia([2, 2, 2]))