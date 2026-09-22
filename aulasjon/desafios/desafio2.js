// 2 - Modifique o código utilizando HERANÇA de alguma maneira.

class ContaBancaria {
    constructor(saldo){
        this.saldo = saldo
    }

    sacar(valor){
        if (valor <= 0){
            console.log("valor inválido")
            return
        }
        if (valor > this.saldo){
            console.log("Saldo insuficiente")
            return
        }
        this.saldo -= valor
        console.log(`Saque realizado: R$${valor}`)
    }
}

const conta = new ContaBancaria(1000)

class ContaPoupanca extends ContaBancaria { 
    constructor(saldo, taxaRendimento){
        super(saldo) //herda um atributo da classe pai (e por baixo dos panos herdo tambem todos os seus metodos)
        this.taxaRendimento = taxaRendimento;
    }
}

const contaPoupancaRebeca = new ContaPoupanca(20000, 0.5) //Define que a taxa de rendimento é de 0.5
valor = 1000;
console.log(contaPoupancaRebeca)