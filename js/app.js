let lista = [];

function adicionar(){

    //pegar os elementos e adicionar os mesmos ao html.
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let listaDeamigos = document.getElementById('lista-amigos')
    if(nomeDoAmigo == ''){
        alert('Coloque um nome')
    }
    else if(lista.includes(nomeDoAmigo)){
        alert('Adicione um nome diferente') 
        
    }else{
        lista.push(nomeDoAmigo)
        document.getElementById('lista-amigos').innerHTML = lista 
    }   
}


function sortear(){
    shuffleArray(lista);
    let sorteio = document.getElementById('lista-sorteio');

    if(lista.length >= 4 ){
        for(let i = 0; i < lista.length; i++){

            if(i == lista.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + lista[i] + '-->' + lista[0] + '<br>'
            }else{
                sorteio.innerHTML = sorteio.innerHTML + lista[i] + '-->' + lista[i + 1] + '<br>'
            }
            
        }
    }else{
        alert('Adicione mais de 4 jogadores')
    }
    
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