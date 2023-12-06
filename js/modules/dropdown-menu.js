import outsideClick from './outsideclick.js'

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  dropdownMenus.forEach((menu) => {
    ;['click', 'thouchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick)
    })

    // menu.addEventListener('click', handleClick)
    // menu.addEventListener('thouchstart', handleClick)
  })

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['click', 'thouchstart'], () => {
      this.classList.remove('active')
    })
  }
}
