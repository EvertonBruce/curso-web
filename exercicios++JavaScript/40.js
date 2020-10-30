let vetor = [0.5, 3.8, 5.9, 9.3, 4.6, 7.9]

function verificaNotas(vetor){
    vetor.filter(nota => {
        if(nota >= 0 && nota < 5){
            console.log(`O conceito da nota ${nota} é D`)
        } else if(nota >= 5 && nota < 7) {
            console.log(`O conceito da nota ${nota} é C`)
        } else if(nota >= 7 && nota < 9){
            console.log(`O conceito da nota ${nota} é B`)
        } else if(nota >=9 && nota <= 10){
            console.log(`O conceito da nota ${nota} é A`)
        }
    })
}

verificaNotas(vetor)