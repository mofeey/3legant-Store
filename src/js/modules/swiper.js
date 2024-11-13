import Swiper from 'swiper/bundle';
function swiperArrivals() {

    const swiper = new Swiper('.swiper', {

        speed: 500,
        spaceBetween: 24,

        breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1.5,
        },
        480: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 2.3,
        },
        675: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 24,
        },
        875: {
            slidesPerView: 3,

        },
        992: {
            slidesPerView: 3.5,

        },
        1100: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4.2,
        },
        1440: {
            slidesPerView: 4.5,
        },

        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

}

export default swiperArrivals;