function contaNotas(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorAEntregar = valor

    while (valorAEntregar !== 0) {
        if (valorAEntregar >= 100) {
            nota100++
            valorAEntregar -= 100
        } else if (valorAEntregar < 100 && valorAEntregar >= 50){
            nota50++
            valorAEntregar -= 50
        } else if (valorAEntregar < 50 && valorAEntregar >= 10 ){
            nota10++
            valorAEntregar -= 10
        } else if (valorAEntregar < 10 && valorAEntregar >= 5){
            nota5++
            valorAEntregar -= 5
        } else if (valorAEntregar < 5 && valorAEntregar >= 1){
            nota1++
            valorAEntregar -= 1
        }
    }

    if (nota100 !== 0){
        console.log(`${nota100} nota(s) de R$100`)
    }
    
    if(nota50 !== 0){
        console.log(`${nota50} nota(s) de R$50`)
    }
    
    if(nota10 !== 0){
        console.log(`${nota10} nota(s) de R$10`)
    }
    
    if(nota5 !== 0){
        console.log(`${nota5} nota(s) de R$5`)
    }
    
    if(nota1 !== 0){
        console.log(`${nota1} nota(s) de R$1`)
    }
}

//contaNotas(252)
//contaNotas(18)
contaNotas(77)