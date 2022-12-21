@@include('./partials/swiper-bundle.min.js')



document.querySelectorAll('.newyear2023-block').forEach(n => {
    const swiper = new Swiper(n.querySelector('.swiper-block-item'), {
        slidesPerView: 5,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    })
});