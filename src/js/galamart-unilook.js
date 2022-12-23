@@include('./partials/swiper-bundle.min.js')



document.querySelectorAll('.unilook-idea').forEach(n => {
    const slider = n.querySelector('.swiper-idea');
    const type = slider.getAttribute('data-type');
    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: type === 'video'? 0 : 1,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        }
    })
});