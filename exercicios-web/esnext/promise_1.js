let p = new Promise(function (resolve) {
  resolve([
     'Claudio', 'Bia', 'Lucas', 'Antonio'
  ])
})

const firstElement = arrayOrString => arrayOrString[0]
const lowerCase = letter => letter.toLowerCase()

p
  .then(firstElement)
  .then(firstElement)
  .then(lowerCase)
  .then(console.log)