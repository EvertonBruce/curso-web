function dinheiro(num) {
    return `R$${num.toFixed(2).replace('.', ',')}`
}

console.log(dinheiro(0.3000000000000004))
console.log(dinheiro(0.74251214251512454854785))
console.log(dinheiro(122.74251214251512454854785))