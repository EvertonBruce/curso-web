// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto("Caneta", 2, 0.2)
const p2 = new Produto("Notebook", 7451.87, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        calculaSalarioReal() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario("João", 2000, 4)
const f2 = new criarFuncionario("Claudia", 15300, 2)
console.log(f1.calculaSalarioReal(), f2.calculaSalarioReal())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função faosa que retorna Objeto... 
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)