function mediaNotas(codAluno, n1, n2, n3) {
    let pesoNotas = [n1, n2, n3]
    let maiorNota = pesoNotas[0]

    for (let i = 1; i < pesoNotas.length; i++) {
        if (pesoNotas[i] > maiorNota) {
            maiorNota = pesoNotas[i]
        }
    }

    let mediaPonderada = ((pesoNotas[0] * 4) + (pesoNotas[1] * 3) + (pesoNotas[2] * 3)) / 10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${n1}, ${n2}, ${n3}. Media: ${mediaPonderada}. ${mediaPonderada < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

mediaNotas(1, 7, 3, 9)
mediaNotas(8, 1, 3, 4)