// Animações surpreendentes e interações divertidas para a página

// Função para alternar a exibição da descrição do trabalho
function toggleDescription(element) {
    var description = element.querySelector('p');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

// Animação de rotação para a galeria de imagens
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'rotate(360deg)';
        image.style.transition = 'transform 0.5s ease';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'rotate(0deg)';
    });
});

// Animação de piscar para o logotipo
const logo = document.querySelector('.logo');

setInterval(() => {
    logo.style.opacity = '0';
    setTimeout(() => {
        logo.style.opacity = '1';
    }, 500);
}, 3000);
