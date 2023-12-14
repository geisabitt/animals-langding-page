import Accordion from './modules/accordion.js'
import DropdownMenu from './modules/dropdown-menu.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import MenuMobile from './modules/menu-mobile.js'
import Modal from './modules/modal.js'
import ScrollAnima from './modules/scroll-anima.js'
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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Functionamento('[data-semana]', 'aberto')
funcionamento.init()

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

fetchAnimais('../../animais.json', '.numeros-grid')
