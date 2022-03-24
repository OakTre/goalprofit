import { Swiper } from 'swiper';

export default () => {
	const slides = Array.from(document.querySelectorAll(".news-content__category"));

	let categorySlides = new Swiper(".news-content__links", {
        slidesPerView: 'auto',
        spaceBetween: 32,
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 8,
				centeredSlides: true,
			},
			767: {
				slidesPerView: 'auto',
				spaceBetween: 16,
			},
		}
    });

	slides.forEach((slide, index)=>{
		if (slide.classList.contains("is-active")) {
			categorySlides.slideTo(index)
		};
	});
};
