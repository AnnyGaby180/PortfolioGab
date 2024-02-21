// Função para exibir a galeria de imagens
function showImageGallery(images) {
    const galleryOverlay = document.querySelector(".gallery-overlay");
    const galleryImages = galleryOverlay.querySelectorAll("img");
    const currentIndexSpan = galleryOverlay.querySelector(".current-index");
    const totalImagesSpan = galleryOverlay.querySelector(".total-images");
    const closeGalleryButton = galleryOverlay.querySelector(".close-gallery");
    let currentImageIndex = 0;

    function updateGallery() {
        galleryImages.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
        currentIndexSpan.textContent = (currentImageIndex + 1);
    }

    // Exibe a galeria de imagens
    galleryOverlay.style.display = "block";

    // Atualiza a galeria com as imagens
    galleryImages.forEach((image, index) => {
        if (index < images.length) {
            image.src = images[index];
        }
    });

    totalImagesSpan.textContent = images.length;

    // Inicializa a galeria com a primeira imagem
    updateGallery();

    // Evento para fechar a galeria
    closeGalleryButton.addEventListener("click", () => {
        galleryOverlay.style.display = "none";
    });

    // Evento para a imagem anterior
    galleryOverlay.querySelector(".prev-image").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    // Evento para a próxima imagem
    galleryOverlay.querySelector(".next-image").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateGallery();
    });
}
// Adicione isso ao seu arquivo estilizar.js
let currentImageIndex = 0;

function changeImage(offset) {
    const images = document.querySelectorAll(".portfolio-image");
    currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
    showImage(currentImageIndex);
}

function showImage(index) {
    const images = document.querySelectorAll(".portfolio-image");
    images.forEach((image, i) => {
        if (i === index) {
            image.style.transform = "translateX(0)";
        } else {
            image.style.transform = "translateX(-100%)";
        }
    });
}

