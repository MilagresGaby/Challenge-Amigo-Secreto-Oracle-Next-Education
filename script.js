let nomes = [];

document.getElementById('adicionarBtn').addEventListener('click', function () {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome && !nomes.includes(nome)) { // Corrigido: faltava um parêntese
        nomes.push(nome);
        atualizarListaNomes();
        nomeInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Nome inválido ou já adicionado!');
    }
});

document.getElementById('sortearBtn').addEventListener('click', function () {
    if (nomes.length < 2) {
        alert('Adicione pelo menos 2 nomes para sortear!');
        return;
    }

    const nomeSorteado = sortearAmigoSecreto();
    document.getElementById('amigoSecreto').textContent = nomeSorteado;
    document.getElementById('resultado').style.display = 'block';
});

function atualizarListaNomes() {
    const listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = ''; // Limpa a lista antes de atualizar
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li); // Adiciona cada nome à lista
    });
}

function sortearAmigoSecreto() {
    const indiceSorteado = Math.floor(Math.random() * nomes.length); // Sorteia um índice aleatório
    return nomes[indiceSorteado]; // Retorna o nome correspondente ao índice sorteado
}