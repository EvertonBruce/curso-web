function aumentoSalarial(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`O novo salário será de ${salario += (salario * 0.1)}`)
            break
        case 'B': 
            console.log(`O novo salário será de ${salario += (salario * 0.15)}`)
            break
        case 'C': 
            console.log(`O novo salário será de ${salario += (salario * 0.2)}`)
            break
        default: 
            console.log('Opção inválida.')
    }
}

aumentoSalarial('A', 1000)
aumentoSalarial('B', 1000)
aumentoSalarial('C', 1000)
aumentoSalarial('D', 1000)