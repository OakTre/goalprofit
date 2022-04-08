import { Navigation, Swiper } from 'swiper';
import gsap from 'gsap';
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
	const newsDetailSlider = document.querySelector(".solution-content__nav");

	if (!newsDetailSlider) return;

	let partersSlider = new Swiper(newsDetailSlider, {
		slidesPerView: 'auto',
	});

	const newsDetailSlider2 = document.querySelector(".solution-content__nav-menu-list");

	let partersSlider2 = new Swiper(newsDetailSlider2, {
		slidesPerView: 'auto',
	});

	const triger = document.querySelector(".solution-content__item");
	const menu = document.querySelector(".solution-content__nav-menu");

	gsap.set(menu, {y:"-100%"});

	ScrollTrigger.create({
		trigger: triger,
		start: 'center top',
		onEnter: function () {
			gsap.to(menu, {duration: 1, y: 0, ease: "expo"});
		},
		onEnterBack: function () {
			gsap.to(menu, {duration: 1, y: '-100%', ease: "expo"});
		},
		onLeaveBack: () => {
			gsap.to(menu, {duration: 1, y: '-100%', ease: "expo"});
		},
		onLeave: function () {
			// gsap.set(el, { y: "100%" })
		}
	});
};
