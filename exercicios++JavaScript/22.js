function anuidadeValor(valorAnuidade, mes) {
    let valorFinal = valorAnuidade

    if (mes === 1){
        return valorFinal.toFixed(2).replace('.', ',')
    } else {
        for (let i = 0; i < mes - 1; i++) {
            valorFinal = valorFinal + (valorFinal * 0.05)
        }
    }
    return valorFinal.toFixed(2).replace('.', ',')
}

console.log(anuidadeValor(100, 1))
console.log(anuidadeValor(100, 2))