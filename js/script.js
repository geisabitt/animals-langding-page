import Accordion from './modules/accordion.js'
import initAnimaScroll from './modules/anima-scroll.js'
import initDropdown from './modules/dropdown-menu.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import initFuncionamento from './modules/funcionamento.js'
import initMenuMobile from './modules/menu-mobile.js'
import Modal from './modules/modal.js'
import ScrollSuave from './modules/scroll-suave.js'
import TabNav from './modules/tab-nav.js'
import Tooltip from './modules/tooltip.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabnav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

initDropdown()
initMenuMobile()
initFuncionamento()
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')
initAnimaScroll()

fetchAnimais('../../animais.json', '.numeros-grid')
