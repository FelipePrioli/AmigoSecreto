let lista = [];

function adicionar(){

    //pegar os elementos e adicionar os mesmos ao html.
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let listaDeamigos = document.getElementById('lista-amigos')
    lista.push(nomeDoAmigo)
    document.getElementById('lista-amigos').innerHTML = lista 
    
}


function sortear(){
    shuffleArray(lista);
    let sorteio = document.getElementById('lista-sorteio');
    document.getElementById('lista-sorteio').innerHTML = lista
}

function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
}

function reiniciar(){
    window.location.reload()
}