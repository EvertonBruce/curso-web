const fs = require('fs')

const produto = {
  nome: 'Tenis',
  preco: 250.23,
  desconto: 0.05
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo gravado com sucesso!')
})