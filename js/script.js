const entrada = document.getElementById('entrada');
const botao = document.getElementById('add');
const lista = document.getElementById('saida');
const itens = []; //vetor

botao.addEventListener('click', function(){
    let valorEntrada = entrada.value;
    itens.push(valorEntrada);
    entrada.value = "";
    console.log(itens);
    saida();
})

function saida(){
    let valorEntrada = entrada.value;
    lista.innerHTML = "";

    for(let i = 0; i < itens.length; i++){
        let li = document.createElement("li");
        li.textContent = itens[i];
        lista.appendChild(li);
    }
}
