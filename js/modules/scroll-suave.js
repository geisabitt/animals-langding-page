export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    // const href = event.currentTarguet.href
    // no exemplo acima ele retorna todo o link inclusive o
    // https:// exemplo.com e nao é isso que queremos nesse momento
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    // console.log(section);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top:topo,
    //     behavior:"smooth",
    // })
    // nesse exemplo fazemos um passo a mais que é o de
    // calcular o topo da função
  }

  //criando um evento para cada item da lista com forEach
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
