const fabricantes = ["Mercedes", "Audi", "Ferrari"]

function imprimir(marca, posicao) {
    console.log(`${posicao + 1}. ${marca}`)
}

fabricantes.forEach(imprimir) // O forEach() é uma função que todo Array possui impliciamente.
fabricantes.forEach(fabricante => console.log(fabricante))