for (let letra of 'cod3r') {
  console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promisse']

for (let i in assuntos) {
  console.log(i)
}

for (let i of assuntos) {
  console.log(i)
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promisse', { abordado: false },],
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chaves of assuntosMap.keys()) {
  console.log(chaves)
}

for (let assunto of assuntosMap.values()) {
  console.log(assunto)
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}