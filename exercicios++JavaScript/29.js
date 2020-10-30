function lerVetor(vetor){
    let intervalo = 0
    let foraIntervalo = 0

    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            intervalo++
        } else {
            foraIntervalo++
        }
    }

    return `Este vetor possui ${intervalo} numeros dentro do intervalo [10-20]
e ${foraIntervalo} numeros fora deste intervaloS.`
}

console.log(lerVetor([5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 24]))