const dados = {
};

const salvarNome = () => {
    dados.nome = document.getElementById('nomeInput').value;
    console.log(dados.nome)
}

const salvarEmail = () => {
    dados.email = document.getElementById('emailInput').value;
    console.log(dados.email)
}

const salvarCadastro = () => {
    salvarNome();
    salvarEmail();
}