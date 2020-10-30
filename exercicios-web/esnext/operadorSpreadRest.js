// operador ... rest(juntar)/ spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Carla', salario: 3560.50 }
const novato = { ativo: true, ...funcionario }
console.log(novato)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Karla', ...grupoA, 'Gustavo']
console.log(grupoFinal)