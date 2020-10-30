function lerVetor(vetor){
    let negativos = 0

    for(let i = 0; i < vetor.length; i++){
        vetor[i] < 0 ? negativos++ : '' 
    }

    return `Existem ${negativos} numeros negativos neste vetor.`
}

console.log(lerVetor([-4, 9, 5, -2, -3, 7, 1]))