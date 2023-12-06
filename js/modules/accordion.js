export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

  //como boa pratica armazenar o nome da classe em uma contante
  //caso seja necessário mudar o nome mais pra frente modificar
  //apenas em um lugar
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    //criando um evento para cada item da lista com forEach
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
