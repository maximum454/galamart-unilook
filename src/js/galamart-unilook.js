@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.fancybox.min.js')



document.querySelectorAll('.unilook-idea').forEach(n => {
    const slider = n.querySelector('.swiper-idea');
    const type = slider.getAttribute('data-type');
    const swiper = new Swiper(slider, {
        slidesPerView: type === 'modal'? 2 : 1,
        spaceBetween: type === 'modal'? 15 : 0,
        initialSlide: type === 'video'? 0 : 1,
        centeredSlides: type === 'modal'? false : true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: type === 'modal'? 1.2 : 1,
                spaceBetween: 0,
                initialSlide: 0,
            },
            768: {
                slidesPerView: type === 'modal'? 2 : 1,
                spaceBetween: type === 'modal'? 15 : 0,
                initialSlide: type === 'video'? 0 : 1,
            }
        }
    })
});