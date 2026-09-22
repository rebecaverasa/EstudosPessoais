const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um numero:", (resposta) => {
    const numero = parseInt(resposta);
    let pares = 0;

    for(let i = 1; i<=numero; i++){
    if(i % 2 == 0){
        pares = pares + 1;
    }
}
console.log(pares)
rl.close();
});



