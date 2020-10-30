function f1(vetor, num) {
    let result = []
    for (let i = 0; i < vetor.length; i++) { 
        result.push(vetor[i] * num)
    }
    return result
}

function f2(vetor, num) {
    let result = []
    for (let i = 0; i < vetor.length; i++) { 
        vetor[i] > 5 ? result.push(vetor[i] * num) : ''
    }
    return result
}

console.log(f1([2, 4, 6, 8], 5))
console.log(f2([2, 4, 6, 8], 5))