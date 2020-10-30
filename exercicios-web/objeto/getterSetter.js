const sequencia = {
    _valor: 1, // conveção isto não é obrigatório e nem torna a variável privada, mas indica que ela é privada para outros desenvolvedores. 
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)