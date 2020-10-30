const fs = require('fs')
const path = require('path')
const { resolve } = require('path')


const searchData = (caminho) => {
  return new Promise(resolve => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
  })
}

const caminho = path.join(__dirname, 'dados.txt')

searchData(caminho)
  .then(data => data.split('\n'))
  .then(line => line.join(','))
  .then(frase => `O valor final é: ${frase}`)
  .then(console.log)

  // Minha resposta

  // function exibirConteudo(_, conteudo) {
  //   console.log(conteudo.toString())
  // }
  
  // const searchData = () => {
  //   return new Promise(resolve => {
  //     resolve(fs.readFile(caminho, exibirConteudo))
  //   })
  // }