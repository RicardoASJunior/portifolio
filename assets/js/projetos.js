let listaCards = [];
const btnCards = document.getElementById('cardsProjetos')
getJson()
async function getJson(){
    await fetch("./assets/json/cards.json").then((response) => {
        response.json().then((cards) => {
            listaCards = cards
            exibirBotoesRedesSociais(listaCards)
        })
    })
}
function exibirBotoesRedesSociais(listaDeCards){
    listaDeCards.forEach(card => {
        btnCards.innerHTML += `
        <article class="cartao">
            <img src="${card.imagemCard}" alt="${card.altImagemCard}" class="cartao__imagem">
            <div class="cartao__conteudo">
                <p class="cartao__perfil">Ricardo Junior</p>
                <h3 class="cartao__titulo">${card.tituloCard}</h3>
                <a href="${card.linkCard}"><button class="cartao__botao cartao__botao--play " aria-label="Assistir Agora"><img src="./assets/img/codigo.png" alt="Video" class="cartao__imagem"></button></a>
            </div>
        </article>
        `
    })
}