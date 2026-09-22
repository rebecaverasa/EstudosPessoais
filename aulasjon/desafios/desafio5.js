class Entrega {
    calcularTotal(valorCompra){
    }
}

class EntregaNormal extends Entrega {
    calcularTotal(valorCompra){
        const valorEntregaNormal = valorCompra*0.05;
        const valorTotalCompra = valorCompra + valorEntregaNormal;
        
        console.log(`O valor da Entrega eh ${valorEntregaNormal}. O total da compra fica R$${valorTotalCompra}`)
    }
}

class EntregaExpressa extends Entrega {
    calcularTotal(valorCompra){
        const valorEntregaExpressa = valorCompra*0.12;
        const valorTotalCompra = valorCompra + valorEntregaExpressa
        
        console.log(`O valor da Entrega eh ${valorEntregaExpressa}. O total da compra fica R$${valorTotalCompra}`)
    }
}

class RetiradaNaLoja extends Entrega {
    calcularTotal(valorCompra){
        const valorRetiradaNaLoja = 0;
        const valorTotalCompra = valorCompra + valorRetiradaNaLoja;
        
        console.log(`O valor da Entrega eh 0 reais. O total da compra fica R$${valorTotalCompra}`)

    }
}

const entregaNormal = new EntregaNormal()
entregaNormal.calcularTotal(10)

const entregaExpressa = new EntregaExpressa()
entregaExpressa.calcularTotal(10)

const retirada = new RetiradaNaLoja()
retirada.calcularTotal(10)