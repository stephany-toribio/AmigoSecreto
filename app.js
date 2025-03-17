let listaAmigo = [];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;
    if(amigo == ''){
        alert('Por favor, ingrese un nombre válido.');
    } else{
        listaAmigo.push(amigo);
        limpiarCaja('amigo');
        console.log(listaAmigo);
        listarAmigos();
    }
}

function limpiarCaja(elemento){
    if(typeof(document.getElementById(elemento).value) == 'string'){
        return document.getElementById(elemento).value = '';
    } else {
        return document.getElementById(elemento).innerHTML = '';
    }
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i=0; i<listaAmigo.length; i++){
        let liElemento = document.createElement('li');
        liElemento.textContent = listaAmigo[i];
        lista.appendChild(liElemento);
    }
}

function generarAmigoSecreto(){
    let idAmigoSecreto = Math.floor((Math.random()*listaAmigo.length))
    return listaAmigo[idAmigoSecreto];
}

function sortearAmigo(){
    let miAmigo = generarAmigoSecreto();
    console.log(miAmigo);
    limpiarCaja('listaAmigos');
    let elementoAmigoSecreto = document.createElement('p');
    elementoAmigoSecreto.textContent = `El amigo secreto es ${miAmigo}`;
    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = "";
    parrafo.appendChild(elementoAmigoSecreto);
}