const gerarNumerosEntre = (min, max, time) => {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, time)
  })
}

const gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 300),
  ])
}

gerarVariosNumeros()
  .then(console.log)