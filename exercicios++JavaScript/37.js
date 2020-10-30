function progressaoAritmetica(n, a1, r) {
    let resultado = a1
    let array = []
    for (let i = 0; i < n; i++){
        array.push(resultado += r)
    }
    console.log(array)
}

function progressaoGeometrica(n, a1, r) {
    let resultado = a1
    let array = []
    for (let i = 0; i < n; i++){
        array.push(resultado *= r)
    }
    console.log(array)
}

progressaoAritmetica(6, 4, 3)
progressaoGeometrica(6, 4, 3)