//0309 Navegação por Tabs

function initTabNav (){
const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
const tabContent = document.querySelectorAll('[data-tab="content"] section')


if(tabMenu.length && tabContent.length){
    /* adiciona a classe ativo ao primeiro item da lista
    também poderia ser colocado diretamente no html mas essa
    solução funciona bem para quando por algum motivo não
    tenha como alterar diretamente no html*/
    tabContent[0].classList.add('ativo')
    function activeTab (index){
        tabContent.forEach((section) =>{
            section.classList.remove("ativo");
        });
        const direcao = tabContent[index].dataset.anime
        tabContent[index].classList.add('ativo', direcao);
    }

    // um loop pra cada item da tab
    // itemMenu é o item especifico que o loop está passando
    // e o index
    tabMenu.forEach((itemMenu, index) => {
        // a cada item é adicionado um evento que ao clique 
        // ele vai executar a função
        itemMenu.addEventListener('click', () => {
            // que recebe como argumento o index
            activeTab(index);
        });
    });
}}
initTabNav();
//0310 Accordion List

function initAccordion(){

    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

    //como boa pratica armazenar o nome da classe em uma contante
    //caso seja necessário mudar o nome mais pra frente modificar
    //apenas em um lugar
    const activeClass = 'ativo';
    if (accordionList.length){

    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion(){
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass);
    }

    //criando um evento para cada item da lista com forEach
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })}
}
initAccordion()

//0311 Scroll Suave Link Interno

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault()
        // const href = event.currentTarguet.href
        // no exemplo acima ele retorna todo o link inclusive o 
        // https:// exemplo.com e nao é isso que queremos nesse momento
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        // console.log(section);

        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top:topo,
        //     behavior:"smooth",
        // })
        // nesse exemplo fazemos um passo a mais que é o de 
        // calcular o topo da função

    }

    //criando um evento para cada item da lista com forEach
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();

// 0312 Animação ao Scroll
function initAnimaSroll()
{
    const sections = document.querySelectorAll('[data-anime="scroll"]')

    if (sections.length)
    {
    // está calculando a altura de metade da tela
    // mais precisamente 60% da tela
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible)
            section.classList.add('ativo');
        else      
        section.classList.remove('ativo');
    })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll)
    }
}
initAnimaSroll();