function vendaAutomovel(automovel){
    switch (automovel) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete': 
            console.log('Tem cereteza que não prefere este modelo?')
            break
        default: 
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

vendaAutomovel('hatch')
vendaAutomovel('motocicleta')
vendaAutomovel('caminhonete')
vendaAutomovel('sedan')
vendaAutomovel('helicoptero')