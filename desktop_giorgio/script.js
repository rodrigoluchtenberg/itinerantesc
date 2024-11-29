function alterarInformativo(numero) {
    const box = document.getElementById('informativo-box');
    switch (numero) {
        case 1:
            box.innerHTML = '<img src="/imagens/programacao.jpeg" alt="Programação" style="width: 100%; height: 100%; object-fit: contain;">';
            break;
        case 2:
            box.innerHTML = '<img src="/imagens/depoimento.png" alt="Depoimento" style="width: 100%; height: 100%; object-fit: contain;">';
            break;
        case 4:
            box.innerHTML = '<img src="/imagens/lembrete.png" alt="Lembrete" style="width: 100%; height: 100%; object-fit: contain;">';
            break;
        case 5:
            box.innerHTML = '<img src="/imagens/duvidas.png" alt="Dúvidas Frequentes" style="width: 100%; height: 100%; object-fit: contain;">';
            break;
        case 6:
            box.innerHTML = '<img src="/imagens/proposito.png" alt="Propósito do Evento" style="width: 100%; height: 100%; object-fit: contain;">';
            break;
        default:
            box.innerHTML = '<p>Conteúdo não encontrado</p>';
    }
}

function baixarPauta() {
    const link = document.createElement('a');
    link.href = '/imagens/Pauta.pdf';
    link.download = 'Pauta.pdf';
    link.click();
}

document.getElementById('downloadButton').addEventListener('click', function (event) {
    event.stopPropagation();
    baixarPauta();
});

document.querySelector('.buttons').addEventListener('click', function (event) {
    if (event.target.closest('.button') && event.target.closest('.button').id !== 'downloadButton') {
        const button = event.target.closest('.button');
        const text = button.querySelector('.text-container').textContent;
        switch (text) {
            case 'Programação':
                alterarInformativo(1);
                break;
            case 'Depoimento':
                alterarInformativo(2);
                break;
            case 'Propósito':
                alterarInformativo(6);
                break;
            case 'Lembrete':
                alterarInformativo(4);
                break;
            case 'Dúvidas':
                alterarInformativo(5);
                break;
            default:
                alterarInformativo(0);
                break;
        }
    }
});

let currentImage = 0;
const images = document.querySelectorAll('.background-slider .image');

function changeBackgroundImage() {
    images.forEach((image, index) => {
        image.classList.remove('active');
    });
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

setInterval(changeBackgroundImage, 8000);
