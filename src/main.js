document.addEventListener('DOMContentLoaded', function() {
    // adicionando uma listener ao final do carregamento da pagina.
    // criando uma constante para poder pegar todos os butões e o [] é para informar o atributo.
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        // aqui vamos pegar a constante que criamos "todos os butões" e adicionar um evento, o evento de clique.
        buttons[i].addEventListener('click', function(botao) {
            const tabTarget = botao.target.dataset.tabButton;
            //para ter o retorno do nome da aba usando o console.log(botao) ao clicar na pagina, mais exatament no botão, irá aparecer o pointer event "ou o clique do mouse signifca" e abrindo esse evento aparece o target, que é a mesma coisa do caminho js para aquele exato lugar(onde) está sendo clicado. O que foi achado foi= dataset.tabButton
            // agora que temos o nome da aba precisamos usar o nome da aba para pegar o elemento.
            const tabs = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();//aqui está chamando a função de esconder as abas
            tabs.classList.add('shows__list--is--active');// aqui está adicionando a classe na aba
            hideBorderButton();//aqui está escondendo a borda do botão
            botao.target.classList.add('shows__tabs__button--is--active');//aqui está adicionando a classe no botão.
        })
    }
})
// aqui fizemos o mesmo para a tabs, tiramos a classe do botão
function hideBorderButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

// vamos criar uma função para esconder (as listas)/as abas que não estão com a classe
function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}