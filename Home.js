
// Animação do menu versão mobi
const btnMenu = document.getElementById('js-btn-menu');

btnMenu.addEventListener('click', () => {
    document.documentElement.classList.toggle('opened-menu')
    btnMenu.classList.toggle('is-active')
})


// const conteudo = document.querySelector('.conteudo');

// window.addEventListener('wheel', (event) => {
//     window.scrollBy(0, event.deltaY * 5);
//     event.preventDefault();
//   });
