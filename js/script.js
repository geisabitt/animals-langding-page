import Accordion from './modules/accordion.js'
import initAnimaScroll from './modules/anima-scroll.js'
import initDropdown from './modules/dropdown-menu.js'
import iniFetchAnimais from './modules/fetch-animais.js'
import iniFetchBitcoin from './modules/fetch-bitcoin.js'
import initFuncionamento from './modules/funcionamento.js'
import initMenuMobile from './modules/menu-mobile.js'
import initModal from './modules/modal.js'
import ScrollSuave from './modules/scroll-suave.js'
import initTabNav from './modules/tab-nav.js'
import initTooltip from './modules/tooltip.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()
const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

initTabNav()
initModal()
initTooltip()
initDropdown()
initMenuMobile()
initFuncionamento()
iniFetchAnimais()
iniFetchBitcoin()
initAnimaScroll()
