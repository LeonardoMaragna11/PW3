let dados;
let link = 'http://computador.sportsontheweb.net/ListarComputador.php/'

function carregarDados(cb){
    fetch(link)
        .then(conteudo => conteudo.text())
        .then((texto) => {
            dados = JSON.parse(texto);
            cb();
        });
}

function exibirTabela(){
    console.log(dados);
    let tabela = '';
    for(let linha in dados){
        tabela += '<tr>';
        tabela += `<td>${dados[linha].id}</td>`;
        tabela += `<td>${dados[linha].processador}</td>`;
        tabela += `<td>${dados[linha].usb}</td>`;
        tabela += `<td>${dados[linha].atulizado ? "Sim" : "Não"}</td>`;
        tabela += `<td>${dados[linha].dataAtualizacao}</td>`;
        tabela += '</tr>';
    }
    document.getElementsByTagName('tbody')[0].innerHTML = tabela;
    
}

function iniciar(){
    carregarDados(exibirTabela)
}

window.onload = iniciar;
