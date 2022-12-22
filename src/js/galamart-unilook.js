@@include('./partials/swiper-bundle.min.js')



document.querySelectorAll('.unilook-idea').forEach(n => {
    const slider = n.querySelector('.swiper-video');
    const type = slider.getAttribute('data-type');
    console.log(type);
    const swiper = new Swiper(slider, {
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