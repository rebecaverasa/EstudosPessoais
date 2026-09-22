// const contagem() => {
//     for(i=0;i<=10;i++){
//         console.log(i)
//     }
//     console.log("seu tempo acabou")
// }


// for(i=0;i<=10;i++){
//         console.log(i)
//     }
//     console.log("seu tempo acabou")

// let i=1;
// while(i<11){
//     console.log(i);
//     i++;
// }
// console.log("acabou")

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// var A = parseInt(lines[0]);
// var B = parseInt(lines[1]);
// var SOMA = A+B;
// console.log("SOMA = ", SOMA)

// const ablabla = require('prompt-sync')()

// const nome = ablabla('Digite seu nome: ')
// console.log('Olá', nome)


const lines = ["12 1 5.30"]


const valoresp1 = lines[0].split(" ")
codep1 = valoresp1[0]
unitsp1 = valoresp1[1]
pricep1 = valoresp1[2]

const valoresp2 = lines[1].split(" ")
codep2 = valoresp2[0]
unitsp2 = valoresp2[1]
pricep2 = valoresp2[2]

amountToPay = (unitsp1*pricep1)+(unitsp2*pricep2)

console.log(`VALOR A PAGAR: R$ ${amountToPay.toFixed(2)}`)
