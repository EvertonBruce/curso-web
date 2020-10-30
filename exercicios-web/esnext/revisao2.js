// Arrow function
const soma = (a, b) => a + b
console.log(soma(4, 8))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total (...numeros) {
  let total = 0
  numeros.forEach(n => total+= n)
  return total
}

console.log(total(2, 3, 5, 7, 8, 4, 10))