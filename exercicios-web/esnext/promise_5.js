function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject('Ocorreu um erro')
    } else {
      resolve(valor)
    }
  }) 
}

funcionarOuNao('testando...', 0.1)
  .then(value => `Valor: ${value}`)
  .then(
    v => console.log(v),
    err => console.log(`Erro esp.: ${err}`) 
  )
  .then(() => console.log('Quase fim!'))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('fim'))