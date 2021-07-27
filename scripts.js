const modoNoturno = document.querySelector('.conteudoModoNoturno')
const body = document.querySelector('body')
const conteudo = document.querySelector('.conteudos')
const cabecalho = document.querySelector('.cabecalho')
const container = document.querySelector('.container')
const links = document.querySelectorAll('a')
console.log(conteudo)

console.log(modoNoturno)
modoNoturno.addEventListener('click', handleClick)
function handleClick(event) {
    modoNoturno.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    body.classList.toggle('ativo')
    cabecalho.classList.toggle('ativo')
    container.classList.toggle('ativo')
    links.forEach((link) => {
        link.classList.toggle('ativo')
    })
}
