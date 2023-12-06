export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
  function onMouseOver(event) {
    const tooltipBox = criatTooltipBox(this)

    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    // tbm é possivel passar um objeto como parametro en vez de uma função
    this.addEventListener('mouseleave', onMouseLeave)
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      // removendo os eventos
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }
  //função que faz o objeto seguir o mouse
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px'
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }

  function criatTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)

    return tooltipBox
  }
}
