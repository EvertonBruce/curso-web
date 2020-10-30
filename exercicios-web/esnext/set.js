// não aceita repetição/não indexada
const times = new Set()
times.add('Cruzeiro')
times.add('Atlético').add('Palmeiras').add('Fluminense')
times.add('Vasco')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'André', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)