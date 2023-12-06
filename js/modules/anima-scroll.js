export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if (sections.length) {
    // está calculando a altura de metade da tela
    // mais precisamente 60% da tela
    const windowMetade = window.innerHeight * 0.6

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) section.classList.add('ativo')
        else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}
