
/* =========================
       MENSAJE CONSOLA 
    ========================= */


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




/* =========================
      NAV BAR
   ========================= */


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar-custom');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    /* ============================
       MENÚ RESPONSIVE
    ============================ */

    navbarCollapse.addEventListener('show.bs.collapse', () => {
        navbar.classList.add('menu-abierto');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        navbar.classList.remove('menu-abierto');
    });

    /* ============================
       SHRINK POR SCROLL
    ============================ */

    const navbarShrink = () => {
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    };

    // Forzar estado correcto al cargar
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        navbarShrink();
    });

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

/* =========================
    MENSAJE FORMULARIO
 ========================= */


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccess");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                form.reset(); // Limpia los campos
                if (successMsg) {
                    successMsg.classList.add("show");
                }
            } else {
                console.error("Error Formspree:", response.status);
                alert("No se pudo enviar el mensaje. Intenta nuevamente.");
            }

        } catch (error) {
            console.error("Error de red:", error);
            alert("Error de conexión. Revisa tu internet.");
        }
    });
});


const navbar = document.querySelector('.navbar-custom');
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('menu-open');
});
