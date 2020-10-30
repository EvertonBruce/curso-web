function verificaAnoBissexto(ano) {

    if (ano >= 400 && ano % 400 === 0) {
        return true
    } else if (
        ano < 400 && ano >= 100 &&
        ano % 100 === 0 ||
        ano % 500 === 0 ||
        ano % 600 === 0 ||
        ano % 700 === 0 ||
        ano % 900 === 0 ||
        ano % 1000 === 0) {
        return false
    } else if (ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaAnoBissexto(1504))
console.log(verificaAnoBissexto(2021))
console.log(verificaAnoBissexto(104))
console.log(verificaAnoBissexto(2800))