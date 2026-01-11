// Espera a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript cargado correctamente");

    // Ejemplo de variable
    const appName = "Proyecto Web";

    // Ejemplo de función simple
    function saludar() {
        console.log("Bienvenido a " + appName);
    }

    // Llamada a la función
    saludar();

});


// Código para el efecto de encogimiento de la barra de navegación al hacer scroll.
window.addEventListener('DOMContentLoaded', event => {

    // Función para encoger la barra de navegación
    var navbarShrink = function () {
        // Selector: Usamos la clase 'navbar-custom' que tienes en tu HTML
        const navbarCollapsible = document.body.querySelector('.navbar-custom');

        if (!navbarCollapsible) {
            return;
        }

        // Comprueba si el desplazamiento vertical es 0 (estás arriba del todo)
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            // Si has hecho scroll, añade la clase
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Llama a la función una vez al cargar (en caso de refrescar la página no en el tope)
    navbarShrink();

    // Llama a la función cada vez que se desplaza la página
    document.addEventListener('scroll', navbarShrink);
});

document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       SWIPER GALERÍA
    ========================= */

    const gallerySwiper = new Swiper('.gallery-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 24,

        speed: 7000,
        freeMode: true,
        freeModeMomentum: false,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        grabCursor: true,
        allowTouchMove: true
    });


    /* =========================
       LIGHTBOX GALERÍA
    ========================= */

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Delegación de eventos (mejor performance)
    document.querySelector('.gallery-swiper').addEventListener('click', function (e) {
        const img = e.target.closest('.gallery-item img');
        if (!img) return;

        lightboxImg.src = img.src;
        lightbox.classList.add('active');

        // Pausar swiper solo al abrir lightbox
        gallerySwiper.autoplay.stop();
    });

    // Cerrar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src = '';

        // Reanudar autoplay
        gallerySwiper.autoplay.start();
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Cerrar con ESC (UX premium)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

});

