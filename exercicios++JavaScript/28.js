function lerVetor(vetor){
    let pares = 0
    let impares = 0

    for(let i = 0; i <= vetor.length; i++){
        if (vetor[i] % 2 === 0){
            pares++
        } else {
            impares++
        }
    }

    return `Este vetor possui ${pares} numeros pares e ${impares} numeros impares.`
}

console.log(lerVetor([1, 2, 3, 4, 5, 6, 8, 9, 10, 11]))