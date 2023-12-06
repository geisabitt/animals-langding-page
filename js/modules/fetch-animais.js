import initAnimaNumeros from './anima-numeros.js'

export default function iniFetchAnimais() {
  // não precisa colocar o local da pasta apenas o nome do json
  // ERRADO const API = "../../animais.json";
  //contante para armazenar a api
  const API = './animais.json'
  // seleciona o elemento html onde vamos renderizar os dados da api
  const numerosGrid = document.querySelector('.numeros-grid')

  // função que busca os animeis na api
  async function fetchAnimais() {
    try {
      // faz a requisição para api
      const animaisResponse = await fetch(API)
      // armazena os dados retornados na api
      const animaisJSON = await animaisResponse.json()

      //loop por cada objeto do arrai de animais
      animaisJSON.forEach((animal) => {
        //chamando a função de criação do elemento html que armazena os animeis buscados na api
        const divAnimal = createAnimal(animal)
        // renderizando no html as div dos animais como filhos do elemento numeros-grid
        numerosGrid.appendChild(divAnimal)
      })
      // executa a animação dos numeros
      initAnimaNumeros()
    } catch (error) {
      console.log(error)
      numerosGrid.innerText = `Erro ao carregar animais`
    }

    function createAnimal(animal) {
      //criando a div e...
      const div = document.createElement('div')
      //... adicionando classe
      div.classList.add('numero-animal')
      // escrevendo os dados retornados da arrai dentro dos seus respectivos elementos com template sring
      div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
      return div
    }
  }
  fetchAnimais()
}
