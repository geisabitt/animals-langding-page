export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  onMouseOver({ currentTarget }) {
    this.criatTooltipBox(currentTarget)
    currentTarget.addEventListener('mousemove', this.onMouseMove)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove()
    // removendo os eventos
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  //função que faz o objeto seguir o mouse

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    }
  }

  criatTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)

    this.tooltipBox = tooltipBox
  }

  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent()
    }
    return this
  }
}
