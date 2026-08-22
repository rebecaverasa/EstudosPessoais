// 1 - Explique o codigo linha a linha e diga onde esta o conceito de abstracao

class ContaBancaria { //Declaraçao da classe ContaBancaria
    constructor(saldo){ //Declaraçao de um construtor para a classe ContaBancaria com o parametro "saldo" (O parâmetro é a variável criada na definição da função. O argumento é o valor real que você envia para a função quando você a chama.)
        this.saldo //linka o saldo ao objeto especifico que utilizar o contrutor.
    }

    sacar(valor){ //cria um método que recebe um parametro 'valor'
        if (valor <= 0){ //cria uma condicao: se o valor for menor ou igual a zero...
            console.log("valor inválido") //se a condiçao do if for verdadeira, a maquina entra dentro do if: lança uma mensagem no console 'valor invalido'
            return //finaliza a operaçao
        } //se a condiçao do primeiro if for falsa, a maquina nao entra dentro do if e pula pra linha 13.
        if (valor > this.saldo){ //cria uma condiçao: se o valor for maior do que o saldo do objeto em questao...
            console.log("Saldo insuficiente") //se a condiçao do if for verdadeira, a maquina entra dentro do if: lança uma mensagem no console 'Saldo insuficiente'
            return //finaliza a operaçao
        } //se a condicao do segundo ir for falsa, a maquina nao entra dentro do if e pula pra linha 17.
        this.saldo -= valor // caso contrario (else), O saldo do objeto em questao tera seu valor alterado para: saldo menos valor. O novo saldo sera: o saldo atual menos o 'valor'. É o mesmo que: this.saldo = this.saldo - valor.
        console.log(`Saque realizado: R$${valor}`) //lança uma mensagem no console: 'Saque realizado: R$*valor definido pelo usuario*'
    }
}

const conta = new ContaBancaria(1000) //cria uma variavel do tipo const chamada conta. Ela recebe a instanciacao da classe ContaBancaria (recebe um objeto que é uma instancia da classe ContaBancaria) com o argumento 1000 para o parametro saldo.