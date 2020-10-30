function verificaDia(nota){
    switch (nota) {
        case 7:
            console.log('Fim de semana')
            break
        case 6: case 5: case 4: case 3: case 2: 
            console.log('Dia útil!')
            break
        case 1:
            console.log('Fim de semana!')
            break
        default: 
            console.log('Dia inválido!')
    }
}

verificaDia(1)
verificaDia(2)
verificaDia(3)
verificaDia(4)
verificaDia(5)
verificaDia(6)
verificaDia(7)
verificaDia(8)
