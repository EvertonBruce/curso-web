function planoSaude(idade) {
    if (idade < 10) {
        return 180
    } else if (idade >= 10 && idade <= 30) {
        return 150
    } else if(idade > 30 && idade<= 60) {
        return 195
    } else {
        return 230
    }
}

console.log(planoSaude(9))
console.log(planoSaude(15))
console.log(planoSaude(42))
console.log(planoSaude(75))
console.log(planoSaude(28))