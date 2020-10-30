// function forEach2(funcao, array) {
//     for(let i = 0; i < array.length; i++) {
//         funcao(array[i], i, array)
//     }
    
// }

// const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// forEach2(function(nomes, indice) {
//     console.log(`${indice + 1}) ${nomes}`)
// }, aprovados)
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nomes, indice) {
    console.log(`${indice + 1}) ${nomes}`)
})
