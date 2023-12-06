export default function iniFetchBitcoin() {
  const API = 'https://blockchain.info/ticker'
  const btcPreco = document.querySelector('.btc-preco')

  fetch(API)
    .then((response) => response.json())
    .then((bitcoin) => {
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    })
    .catch((erro) => {
      console.log(Error(erro))
      btcPreco.innerText = `Falha ao carregar o valor`
    })
}
