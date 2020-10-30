function precoLanche(cod, qtd) {
    switch (cod) {
        case 100: 
            console.log(`O valor a ser pago é ${qtd * 3}`)
            break
        case 200:
            console.log(`O valor a ser pago é ${qtd * 4}`)
            break
        case 300: 
            console.log(`O valor a ser pago é ${qtd * 5.50}`)
            break
        case 400: 
            console.log(`O valor a ser pago é ${qtd * 7.50}`)
            break
        case 500: 
            console.log(`O valor a ser pago é ${qtd * 3.50}`)
            break
        case 600: 
            console.log(`O valor a ser pago é ${qtd * 2.80}`)
            break
        default: 
            console.log('Produto não existente.')
    }
}

precoLanche(100, 5)
precoLanche(200, 3)
precoLanche(300, 2)
precoLanche(400, 6)
precoLanche(500, 1)
precoLanche(600, 9)
precoLanche(700, 5)