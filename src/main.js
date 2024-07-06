document.addEventListener('DOMContentLoaded', function() {
    // adicionando uma listener ao final do carregamento da pagina.
    // criando uma constante para poder pegar todos os butões e o [] é para informar o atributo.
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]'); // aqui estamos criando uma constante para poder acessar as perguntas.

    const heroSection = document.querySelector('.hero'); //recuperando a seção hero//
    const heigthHero = heroSection.clientHeight;// recuperando a altura da seção hero// 

    window.addEventListener('scroll', function() {
        const actualPosition = window.scrollY;

        if (actualPosition < heigthHero) {
            hideClass();
        } else {
            showClass();
        }
    })


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

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', closeOrOpen);
    }
})

function hideClass() {
    const header = document.querySelector('header'); //recuperei o header, para adicionar, esta classe no header mesmo.
    header.classList.add('header--is-hidden');
}

function showClass() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function closeOrOpen(element) { //se passarmos o console.log(element), veremos que com essa função estamos acessando a div dentro do li, ou seja estamos acessando faq__questions__item__questions, contudo para abrir e fechar, é necessário acessar o elemento pai, o LI faq__questions__item
    const faqClass = 'faq__questions__item--is-open';
    const elementNode =  element.target.parentNode;

    elementNode.classList.toggle(faqClass);
}
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