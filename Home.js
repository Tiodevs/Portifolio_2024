
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

// Baixar CV

document.getElementById('divParaDownload').addEventListener('click', function() {
    // Cria um link temporário
    var link = document.createElement('a');
    link.href = './CV.pdf'; // Substitua pelo caminho do seu PDF
    link.download = 'CV.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link temporário
});
          




