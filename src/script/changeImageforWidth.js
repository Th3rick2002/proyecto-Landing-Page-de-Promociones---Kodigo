function setResponsiveImages(configs) {
    function applyImages() {
        const isLarge = window.innerWidth >= 768;

        configs.forEach(({ elementId, small, large }) => {
            const el = document.getElementById(elementId);
            if (el) {
                el.src = isLarge ? large : small;
            }
        });
    }

    // Ejecutar al cargar
    applyImages();

    // Ejecutar al redimensionar (con debounce básico)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(applyImages, 150);
    });
}

// Llamada de ejemplo
setResponsiveImages([
    {
        elementId: 'logo-siman',
        small: './assets/logos/siman.svg',
        large: './assets/logos/siman.com.svg'
    },
    {
        elementId: 'imgSlides1',
        small: './assets/images/slides/pantalla-small.webp',
        large: './assets/images/slides/pantalla-large.webp'
    },
    {
        elementId: 'imgSlides2',
        small: './assets/images/slides/zapatos-small.gif',
        large: './assets/images/slides/zapatos-large.gif'
    },
    {
        elementId: 'imgSlides3',
        small: './assets/images/slides/celulares-small.gif',
        large: './assets/images/slides/celulares-large.gif'
    },
    {
        elementId: 'imgSlides4',
        small: './assets/images/slides/linea-blanca-small.webp',
        large: './assets/images/slides/linea-blanca-large.webp'
    }
]);