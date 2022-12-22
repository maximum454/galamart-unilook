@@include('./partials/swiper-bundle.min.js')



document.querySelectorAll('.unilook-video').forEach(n => {
    const swiper = new Swiper(n.querySelector('.swiper-video'), {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        }
    })
});