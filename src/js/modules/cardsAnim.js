import gsap, { to } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
	function getCoords(elem) {
		let box = elem.getBoundingClientRect();

		return {
			top: box.top + window.pageYOffset,
			right: box.right + window.pageXOffset,
			bottom: box.bottom + window.pageYOffset,
			left: box.left + window.pageXOffset
		};
	}

	const block1 = document.querySelector(".steps__blocks");
	const block2 = document.querySelector(".steps__rotated-block-wrapper");

	const tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".steps__row:nth-child(1)",
			start: "top-=50 top",
			end: "bottom center",
			scrub: true,
		},
	});

	const items = document.querySelectorAll(".steps__rotated-block-item");
	console.log(360 / items.length);



	if (block2) return;

	gsap.set(block2, {autoAlpha: 0});

	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".steps__row:nth-child(2)",
			start: "top center",
			end: "bottom bottom",
			endTrigger: ".steps__row:nth-child(3)",
			scrub: true,
			markers: true,
			pin: ".steps__row:nth-child(2)",
			pinSpacing: false
		},
	});

	tl1
		.to(block1, {
			x: () => {
				const x1 = getCoords(block1).left + (block1.offsetWidth / 2);
				const x2 = getCoords(block2).left + (block2.offsetWidth / 2);

				console.log("blocl1X: "+ x1);
				console.log("blocl2X: "+ x2);

				return x2 - x1;
			},
			y: () => {
				const y1 = getCoords(block1).top + (block1.offsetHeight / 2);
				const y2 = getCoords(block2).top + (block2.offsetHeight / 2);

				console.log("blocl1Y: "+ y1);
				console.log("blocl2Y: "+ y2);

				return y2 - y1;
			},
			scale: () => {
				return block2.offsetWidth / block1.offsetWidth;
			},
			rotate: "45deg",
			duration: 1
		})
		.to(block1, {
			autoAlpha: 0,
			duration: 1
		}, 0.2)

	// tl2
	// 	.to(block2, {
	// 		autoAlpha: 1
	// 	}, 0.2)
	// 	.from(".steps__rotated-block-item", {
	// 		autoAlpha: 0,
	// 		duration: 0.4,
	// 		stagger: 0.1,
	// 	})
};