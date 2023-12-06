export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach((numero) => {
      const total = numero.innerText
      const incremento = Math.floor(total / 100)
      //console.log(total);
      let start = 0
      const timer = setInterval(() => {
        //start++;
        start = start + incremento
        numero.innerText = start
        if (start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      // disconecta o observador para que não fiqua nimando os numeros toda vez que rola a pagina
      observer.disconnect()
      animaNumeros()
    }
  }

  // seleção do objeto que vai ser observado
  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)
  // objerva o objeto e verifica se há mudanças no atributo
  observer.observe(observerTarget, { attributes: true })
}
