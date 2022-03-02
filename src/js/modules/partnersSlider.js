import { Navigation, Swiper, Grid } from 'swiper';

Swiper.use([Navigation, Grid]);

export default () => {
    const partner = document.querySelector(".js-parners-slider");
    const partner2 = document.querySelector(".js-parners-slider2");

    let partersSlider = new Swiper(partner, {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
        spaceBetween: 84,
        navigation: {
            nextEl: '.js-swiper-button-next',
            prevEl: '.js-swiper-button-prev',
        },
    });

    let partersSlider2 = new Swiper(partner2, {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
        spaceBetween: 84,
        navigation: {
            nextEl: '.js-swiper-button-next2',
            prevEl: '.js-swiper-button-prev2',
        },
    });
};