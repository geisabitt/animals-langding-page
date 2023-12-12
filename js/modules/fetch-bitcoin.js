export default function FetchBitcoin(url, target) {
  //const API = 'https://blockchain.info/ticker'
  const btcPreco = document.querySelector(target) //'.btc-preco'

  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    })
    .catch((erro) => {
      console.log(Error(erro))
      btcPreco.innerText = `Falha ao carregar o valor`
    })
}
