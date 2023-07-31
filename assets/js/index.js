let listaBotoes = [];
const btnContainer = document.getElementById('btnRedesSociais')
getJson()
async function getJson(){
    await fetch("./assets/json/botoes.json").then((response) => {
        response.json().then((button) => {
            listaBotoes = button
            exibirBotoesRedesSociais(listaBotoes)
        })
    })
}
function exibirBotoesRedesSociais(listaDeBotoes){
    listaDeBotoes.forEach(btn => {
        btnContainer.innerHTML += `
        <a class="apresentacao__links__navegacao" href="${btn.link}">
                        <img class="img_btn" src="${btn.imagem}" alt="${btn.altImagem}">
                        ${btn.titulo}
        </a>
        `
    })
}