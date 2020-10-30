function tipoTriang(a, b, c) {
    if(a === b & b === c) {
        console.log('É um triangulo Equilatero.')
    } else if (a === b || a === c || b === c ) {
        console.log('é um triangulo Isósceles')
    } else {
        console.log('É um triangulo Escaleno')
    }
}

tipoTriang(2, 2, 2)
tipoTriang(5, 5, 7)
tipoTriang(5, 2, 7)