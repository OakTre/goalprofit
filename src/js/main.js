import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import contactUsVideoInit from "./modules/contactUsVideoInit.js";
import validation from "./modules/validation.js";
import howItWorks from "./modules/howItWorks.js";
import cardsAnim from "./modules/cardsAnim.js";
import partnersSlider from "./modules/partnersSlider.js";
import historySlider from "./modules/historySlider.js";
import map from "./modules/map.js";
import initAccordion from "./modules/initAccordion";
import newsDetailSwiper from "./modules/newsDetailSwiper";
import initModal from "./modules/initModal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function startAnim() {
	const tmln1 = gsap.timeline();

	if (!document.querySelector(".js-anim-img")) return;

	tmln1
		.to(".js-anim-img", { y: 0, autoAlpha: 1, duration: 1, ease: "power4.out", clearProps: "all" })
		.to(".js-content-anim", { y: 0, autoAlpha: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.3")
		.to(".js-start-anim-header", { y: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.5")
		.to(".js-start-anim-contacts", { y: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.8")
}

window.onload = function () {
	let preloader = document.querySelector(".preloader");
	preloader.classList.add("_is-loaded");

	setTimeout(() => {
		startAnim();
	}, 150);

	setTimeout(() => {
		preloader.style.display = "none";
	}, 550);
};

documentReady(() => {
	lazyImages();
	contactUsVideoInit();
	validation();
	howItWorks();
	cardsAnim();
	partnersSlider();
	historySlider();
	map();
	initAccordion();
	newsDetailSwiper();
	initModal();

	const btnTop = document.querySelector(".button-scroll-top");

	btnTop.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// gsap.registerPlugin(ScrollTrigger);
	if (!document.querySelector(".js-anim-img")) return;

	gsap.set(".js-anim-img", { y: 75, autoAlpha: 0 });
	gsap.set(".js-content-anim", { y: 75, autoAlpha: 0 });
	gsap.set(".js-start-anim-header", { y: -35, opacity: 0 });
	gsap.set(".js-start-anim-contacts", { y: 75, opacity: 0 });


	// paralax
	// const tmln = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".parallax",
	// 		start: "top 85%",
	// 		end: "bottom 30%",
	// 		scrub: true
	// 	}
	// });

	// gsap.utils.toArray(".parallax").forEach(layer => {
	// 	gsap.set(layer, { y: 75 })
	// });

	// gsap.utils.toArray(".parallax").forEach(layer => {
	// 	gsap.to(layer, {
	// 		y: 0,
	// 		duration: 0.5,
	// 		// ease: "power4.out",
	// 		scrollTrigger: {
	// 			trigger: layer,
	// 			start: "top 90%",
	// 			end: "bottom top",
	// 		}
	// 	});
	// });
});
