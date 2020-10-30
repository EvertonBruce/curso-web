function filtroNotas(nota) {
    if(nota < 38) {
        console.log('Aluno reprovado!')
    } else {
        if(nota == 38 || nota == 39 ){
            nota = 40
        } else if(nota == 43 || nota == 44){
            nota = 45
        } else if(nota == 48 || nota == 49){
            nota = 50
        } else if(nota == 53 || nota == 54){
            nota = 55
        } else if(nota == 58 || nota == 59){
            nota = 60
        } else if(nota == 63 || nota == 64){
            nota = 65
        } else if(nota == 68 || nota == 69){
            nota = 70
        } else if(nota == 73 || nota == 74){
            nota = 75
        } else if(nota == 78 || nota == 79){
            nota = 80
        } else if(nota == 83 || nota == 84){
            nota = 85
        } else if(nota == 88 || nota == 89){
            nota = 90
        } else if(nota == 93 || nota == 94){
            nota = 95
        } else if(nota == 98 || nota == 99){
            nota = 100
        }
        console.log(`Aluno aprovado, a nota é ${nota}`)
    }
}

filtroNotas(84)
filtroNotas(30)

