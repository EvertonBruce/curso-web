function Pessoa(name) {

    this.name = name

    this.falar = function () {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('Noemia')
p1.falar()