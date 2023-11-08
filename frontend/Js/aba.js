const abaInstituicao = document.querySelector("#instituicao-tab")
const abaContribuidor = document.querySelector("#contribuidor-tab")
const conteudoContribuidor = document.querySelector("#contribuidor-tab-pane")
const conteudoInstituicao = document.querySelector("#nav-instituicao")
function trocaAba(indice) {
    const listaAba = [{botao:abaContribuidor, content:conteudoContribuidor}, {botao:abaInstituicao, content:conteudoInstituicao}]
    listaAba.forEach((element, index) => {
        if (indice !== index) {
            element.botao.classList.remove('active')
            element.content.classList.add('esconde')
        }
        else {
            element.botao.classList.add('active')
            element.content.classList.remove('esconde')
        }
    });
}