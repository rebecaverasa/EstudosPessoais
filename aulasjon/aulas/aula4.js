async function rodarLoopNoBackground() {
  for (let var_grande = 0; var_grande < 10; var_grande++) {
    console.log(var_grande);
  }
}

// Dispara a função mas NÃO usa 'await', permitindo que o JS siga para a próxima linha
rodarLoopNoBackground();
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"); // Esta linha (linha 7) executará IMEDIATAMENTE