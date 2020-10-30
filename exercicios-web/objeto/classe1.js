class Lancamento {
    constructor(name = 'Qualquer', valor = 0) {
        this.name = name
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('Luz', -300)

const contas = new CicloFinanceiro(7, 2020)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())