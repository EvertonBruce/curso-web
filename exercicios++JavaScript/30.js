function lerVetor(vetor){
    let menor = vetor[0]
    let maior = vetor[0]

    for(let i = 0; i < vetor.length; i++){
        vetor[i] > maior ? maior = vetor[i] : menor = vetor[i] 
    }

    return `O maior valor dentro do vetor é ${maior}, e o menor valor dentro do vetor é ${menor}`
}

console.log(lerVetor([2, 8, 6, 3, 7, 1]))