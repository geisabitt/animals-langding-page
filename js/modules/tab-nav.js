export default function initTabNav (){
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
