import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export default () => {
    const newsDetailSlider = document.querySelector(".js-news-detail-swiper");

    let partersSlider = new Swiper(newsDetailSlider, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.js-news-derail-next',
            prevEl: '.js-news-derail-prev',
        },
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		}
    });
};
