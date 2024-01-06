
// Animação do menu versão mobi
const btnMenu = document.getElementById('js-btn-menu');

btnMenu.addEventListener('click', () => {
    document.documentElement.classList.toggle('opened-menu')
    btnMenu.classList.toggle('is-active')
})

const isMobile = window.innerWidth <= 768;

if (!isMobile) {
    VanillaTilt.init(document.querySelector(".tilt-card"), {
        max: 1000,
        
        speed: 400,
        glare: true,
        "max-glare": 1,
        gyroscope: false
    });
}

function redirecionarParaSite(link) {
    window.open(link, '_blank');
}

function redirecionarParaSite2(link) {
    window.location.href = link;
}
          





// FUNÇÃO DE ESCOLAR DIRETO PARA A OUTRA SESSÃO

// let lastScrollTime = 0;

// window.addEventListener("wheel", event => {
//     const now = new Date().getTime();
    
//     // Verificando a direção do scroll
//     const delta = Math.sign(event.deltaY);
    
//     if (now - lastScrollTime < 800) {
//         event.preventDefault();
//         return;
//     }

//     lastScrollTime = now;

//     if(delta == -1){
//         window.scrollTo({
//             top: window.scrollY - 900,
            
//         });
//     } else {
//         window.scrollTo({
//             top: window.scrollY + 900,
            
//         });
//     }
// });
