function aplicacaoJurosSimples(capInici, taxaJuros, tempoApli) {
    let rendimento = 0
    for (let i = 0; i < tempoApli; i++){
        rendimento += capInici * taxaJuros
    }
    return capInici + rendimento
}

function aplicacaoJurosComposto(capInici, taxaJuros, tempoApli) {
    let rendimento = capInici
    for (let i = 0; i < tempoApli; i++){
        rendimento = rendimento + (rendimento * taxaJuros)
    }
    return rendimento.toFixed(2).replace('.', ',')
}

console.log(aplicacaoJurosSimples(100, 0.01, 12))
console.log(aplicacaoJurosComposto(100, 0.01, 12))

