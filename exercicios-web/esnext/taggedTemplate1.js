// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Próxima string'
}

const nome = 'Diego'
const situacao = 'Reprovado'

console.log(tag`${nome} está ${situacao}`)