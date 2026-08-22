// 3 - Modifique o código da segunda questão, utilizando ENCAPSULAMENTO de alguma maneira.

class ContaBancaria {
    #senha
    constructor(saldo, senha){
        this.saldo = saldo
        this.#senha = senha; //criei um atributo senha privado
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

    getSenha(){ //criei esse metodo que vai retornar o valor de #senha do objeto em questao, utilizando esse metodo fora do escopo da classe eu consigo fazer um get na senha memso ela sendo privada
        return this.#senha
    }
}

const conta = new ContaBancaria(1000, 'uau')
// console.log(conta.#senha) -> esse da erro porque nao podemos acessar um atributo privado fora do escopo da classe
console.log(conta.getSenha()) // esse da certo porque uso o metodo get que defini dentro do escopo da classe para mostrar o valor da senha

class ContaPoupanca extends ContaBancaria {
    constructor(saldo, senha, taxaRendimento){
        super(saldo, senha)
        this.taxaRendimento = taxaRendimento;
    }
    
}

const contaPoupancaRebeca = new ContaPoupanca(20000, 'uaudaContaPoupancaRebeca', 0.5)
valor = 1000;
// console.log(contaPoupancaRebeca.#senha) -> esse da erro porque nao podemos acessar um atributo privado fora do escopo da classe
console.log(contaPoupancaRebeca.getSenha()) // esse da certo porque uso o metodo get que defini dentro do escopo da classe para mostrar o valor da senha