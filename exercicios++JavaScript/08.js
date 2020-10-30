/*const jogo = '10, 20, 20, 8, 25, 0, 30, 1'

function analisaPontuacao(str){
    let pontuacao = str.split(", ")
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    let bateuRecord = 0
    let piorJogo = 1
    for (let i = 1; i < pontuacao.lenght; i ++) {
        if(pontuacao[i] > maiorPontuacao){
            maiorPontuacao = pontuacao[i]
            bateuRecord++
        } else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i + 1;
        }
    }
    return [bateuRecord, piorJogo]
}

console.log(analisaPontuacao(jogo))*/

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))