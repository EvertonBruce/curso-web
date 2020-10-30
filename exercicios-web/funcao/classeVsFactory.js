class Pessoa {
    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('Noemia')
p1.falar()

const contrutorPessoa = name => {
    return {
        falar: () => {
            console.log(`Meu nome é ${name}`)
        }
    }
}

const p2 = contrutorPessoa('Noemia')
p2.falar()