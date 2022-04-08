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
import openMenu from "./modules/openMenu";
import resoursesNav from "./modules/resoursesNav";
import solutionsFixedMenu from "./modules/solutionsFixedMenu";

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
	openMenu();
	resoursesNav();
	solutionsFixedMenu();

	const btnTop = document.querySelector(".button-scroll-top");

	btnTop.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// якори
	const anchors = document.querySelectorAll('a[href*="#"]');

	for (let anchor of anchors) {
		if (window.matchMedia("(min-width: 767px)").matches) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const blockID = anchor.getAttribute('href').substr(1)

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});

				anchors.forEach(elmt=>{
					elmt.classList.remove("is-active");
				});

				anchor.classList.add("is-active");
			})
		} else {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const blockID = anchor.getAttribute('href').substr(1)

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				anchors.forEach(elmt=>{
					elmt.classList.remove("is-active");
				});

				anchor.classList.add("is-active");
			})
		}
	}

	// gsap.registerPlugin(ScrollTrigger);
	if (!document.querySelector(".js-anim-img")) return;

	gsap.set(".js-anim-img", { y: 75, autoAlpha: 0 });
	gsap.set(".js-content-anim", { y: 75, autoAlpha: 0 });
	gsap.set(".js-start-anim-header", { y: -35, opacity: 0 });
	gsap.set(".js-start-anim-contacts", { y: 75, opacity: 0 });
});
