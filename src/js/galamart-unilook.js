@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.fancybox.min.js')

document.querySelectorAll('.unilook-idea').forEach(n => {
    const slider = n.querySelector('.swiper-idea');
    const type = slider.getAttribute('data-type');
    const arrowNext = n.querySelector('.swiper-button-next')
    const arrowPrev = n.querySelector('.swiper-button-prev')
    const content = slider.querySelector('.unilook-idea__content');
    if(content){
        arrowNext.style.top = `calc(50% - ${content.clientHeight/2}px)`;
        arrowPrev.style.top = `calc(50% - ${content.clientHeight/2}px)`;
    }

    const swiper = new Swiper(slider, {
        slidesPerView: type === 'modal'? 2 : 1,
        spaceBetween: type === 'modal'? 15 : 0,
        initialSlide: type === 'video'? 0 : 1,
        centeredSlides: type === 'modal'? false : true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: arrowNext,
            prevEl: arrowPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: type === 'modal'? 1.1 : 1,
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


$('.fancybox-unilook').fancybox({
    arrows: false,
    infobar: false,
    buttons: [
        "close"
    ],
});
