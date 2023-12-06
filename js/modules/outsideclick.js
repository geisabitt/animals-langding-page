// essa função recebe os elementos os eventos e o retorno
// e ativa o evento ao elemento
export default function outsideClick(element, events, callback) {
  const html = document.documentElement
  const outside = 'data-outside'
  // se não elemento houver/existir o atributo declarado na constante outside
  // isso faz com que o evento seja ativo apenas uma vez e não a cada clique
  if (!element.hasAttribute(outside)) {
    // faz um loop pelos eventos e
    events.forEach((userEvent) => {
      //adicione um evento ao html e
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
      //o setTimeout nesse caso está presente para que esse evento seja executado por ultimo
      //e corrigir a falha de que o menu mobile não abrir
    })
    // defina o atributo declarado na constante outside ao elemento
    element.setAttribute(outside)
  }
  // essa função desativa o evento ao  clicar fora do elemento
  function handleOutsideClick(event) {
    // se o click acontecer fora do elemento
    if (!element.contains(event.target)) {
      // remova os eventos
      element.removeAttribute(outside)
      // faz um loop pelos eventos e
      events.forEach((userEvent) => {
        //remove um evento do html
        html.removeEventListener(userEvent, handleOutsideClick)
      })
      callback()
    }
  }
}
