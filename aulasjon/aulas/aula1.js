//soma de todos os numeros de 1 a n (n sendo o numero q a pessoa digitar)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um numero:", (resposta) => {
    const numero = parseInt(resposta)
    let soma = 0;

    for(let i=0; i<=numero; i++){
        soma = soma + i
    }
    console.log(soma)
    rl.close();
})