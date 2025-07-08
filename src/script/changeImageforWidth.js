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
        small: './assets/images/slides/e3ffc675-eec6-4091-a1df-60cddfab6969___ba5d96b8ca18018482d77851ff5e36ba.webp',
        large: './assets/images/slides/7cf6e13f-74ac-4090-987f-35670c6a78db___e5305584cd7986925daf0208fe7380e1.webp'
    },
    {
        elementId: 'imgSlides2',
        small: './assets/images/slides/079540d2-d0c3-4251-8624-175c7c445189___5fb6e062bcd7e256d67ee787265794d4.gif',
        large: './assets/images/slides/9e9ee171-ba28-4ced-87dc-b5fd2dbc4a5a___41e7fc11ae037e4c972a553c787389e3.gif'
    },
    {
        elementId: 'imgSlides3',
        small: './assets/images/slides/a7eefa97-88cf-4247-8ecc-f669a80da97e___ba4d576867784fd5f9b9bb8a7ac90ced.gif',
        large: './assets/images/slides/68c42769-f5ff-408c-8e88-43f5172cf370___7e6ecb4be374d73633bc8d944218ca67.gif'
    },
    {
        elementId: 'imgSlides4',
        small: './assets/images/slides/db0c54c8-dc5e-47b8-be1f-657a3786d284___f91004460c13545eb74f6459e96b9b9c.webp',
        large: './assets/images/slides/0068805d-4457-4b9c-8d14-8dfb41ce92bf___6623e287722ec54911ded94cca1cd87c.webp'
    }
]);