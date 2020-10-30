console.log(7 / 0) // Em certas operações matemáticas que tendem ao infinito, pode ocorrer isto o JS compreende esta conta como 'infinity'
console.log("10" / 2)
console.log('3' + 1)
console.log("Show!" * 2) // Diferente de algumas linguagens o JS não multiplica strings
console.log(0.1 + 0.7) // A linguagem não suporta certas operações com precisão
// console.log(10.toString()) // A linguagem não consegue usar métodos diretamente de numeros como nessa caso
console.log((10.345).toString()) // para usar métodos diretamente em números é necessário que eles estejam entre parenteses
console.log((10.454).toFixed(2))