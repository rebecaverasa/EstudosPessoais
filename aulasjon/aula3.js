const campoInput = document.getElementById("meuInput");
const botao = document.getElementById("botaoenviar");
const displayResultado = document.getElementById("resultado");

botao.addEventListener('click', function() {
    let N = Number(campoInput.value)
    let pares = 0;

    for (let i=1; i<=N; i++){
        if (i%2 === 0){
            pares++;
        }
    }
    displayResultado.textContent = pares;
})
