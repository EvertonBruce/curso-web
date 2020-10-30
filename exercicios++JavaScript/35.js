let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

for (let i = 0; i < 5; i++) {
    vetorPilha.push(vetorAdiciona[0])
    
    vetorAdiciona.shift()

}

console.log(vetorPilha)