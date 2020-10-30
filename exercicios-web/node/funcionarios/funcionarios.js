const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
})

  // const funcionarios = response.data
  // const mulheresChinesas = funcionarios.filter(f => f.pais === 'China').filter(f => f.genero === 'F')
  // const resultado = mulheresChinesas.forEach(mulher => {
  //   const menor = mulheresChinesas[0]
  //   if (mulher.salario < menor) {
  //     menor = mulher.salario
  //   }
  // })
  // console.log(resultado)
  // //console.log(funcionarios)