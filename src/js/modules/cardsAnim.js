import gsap, { to } from "gsap";
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";

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

	const items = document.querySelectorAll(".steps__rotated-block-item");

	if (!items.length) return;

	let root = document.querySelector(".steps__rotated-block");

	root.style.setProperty('--angle', 360 / items.length + "deg");


	ScrollTrigger.matchMedia({
		"(max-width: 767px)": function () {
			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".first",
					start: "top 10%",
					end: "+=" + (window.innerHeight * 2.5),
					pin: true,

					scrub: true,
					anticipatePin: 1,
					onLeave: () => {
						ScrollTrigger.refresh()
					}
				}
			})

			cardTmln.to(".first__item:not(:last-child)", {
				yPercent: -110,
				duration: 1,
				stagger: 1,
			});

			if (document.querySelectorAll(".second__item").length > 1) {
				let cardTmln2 = gsap.timeline({
					scrollTrigger: {
						trigger: ".second",
						start: "top 20%",
						end: "+=" + (window.innerHeight * 2.5),
						pin: true,

						scrub: true,
						anticipatePin: 1,
					}
				})

				cardTmln2.to(".second__item:not(:last-child)", {
					yPercent: -110,
					duration: 1,
					stagger: 1,
				});
			}

			const stepCards = Array.from(document.querySelectorAll(".steps__card"));

			document.querySelector(".steps__card-wrapper").innerHTML = "";

			for (let i = stepCards.length - 1; i >= 0; i--) {
				let copy = stepCards[i].cloneNode(true);
				document.querySelector(".steps__card-wrapper").append(copy);
			}
		},
		"(max-width: 992px)": function () {
			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".retailers",
					start: "top 20%",
					end: "+=" + (window.innerHeight * 2.5),
					pin: true,

					scrub: true,
					anticipatePin: 1,
					onLeave: () => {
						ScrollTrigger.refresh()
					}
				}
			})

			cardTmln.to(".first__item:not(:last-child)", {
				yPercent: -110,
				duration: 1,
				stagger: 1,
			});

			if (document.querySelectorAll(".second__item").length > 1) {
				let cardTmln2 = gsap.timeline({
					scrollTrigger: {
						trigger: ".second",
						start: "top 30%",
						end: "+=" + (window.innerHeight * 2.5),
						pin: true,

						scrub: true,
					}
				})

				cardTmln2.to(".second__item:not(:last-child)", {
					yPercent: -120,
					duration: 1,
					stagger: 1,
				});
			}
		},
		"(min-width: 992px)": function () {

			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".retailers__container",
					start: "top 20%",
					end: "+=" + (window.innerHeight * 1.5),
					pin: true,
					scrub: true,
					anticipatePin: 0,
					onLeave: () => {
						ScrollTrigger.refresh()
					}
				}
			})

			cardTmln
				.to(".first__item:not(:last-child)", {
					yPercent: -120,
					duration: 1,
					stagger: 1,
				})
			// gsap.utils.toArray(".first__item:not(:last-child)").forEach(card => {
			// });

			const block1 = document.querySelector(".steps__blocks");
			const blockRotated = document.querySelector(".steps__rotated-block");
			const block2 = document.querySelector(".steps__rotated-block-inner2");
			const block3 = document.querySelector(".steps__card:nth-child(1)");

			gsap.set(block2, {
				autoAlpha: 0
			});
			gsap.set(".steps__row:nth-child(1)", {
				autoAlpha: 0,
				y: "+2rem"
			});
			gsap.set(".js-text-block2", {
				autoAlpha: 0,
				y: "+2rem"
			});
			gsap.set(".js-text-block3", {
				autoAlpha: 0,
				y: "+2rem"
			});
			gsap.set(".steps__rotated-block-inner", {
				autoAlpha: 0
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".steps__row:nth-child(1)",
					start: "top 50%",
				},
			});

			const tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: ".steps__row:nth-child(1)",
					start: "top-=50 top",
					end: "bottom center",
					scrub: true,
				},
			});

			const tl1Icons = gsap.timeline({
				scrollTrigger: {
					trigger: ".steps__row:nth-child(1)",
					start: "top-=50 top",
					end: "bottom center",
					scrub: true,
				},
			});

			const tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".steps__row:nth-child(2)",
					start: "top 20%",
					end: "bottom bottom",
					endTrigger: ".js-steps-row3",
					scrub: true,
					pin: ".steps__row:nth-child(2)",
				},
			});

			const tl3 = gsap.timeline({
				scrollTrigger: {
					trigger: ".js-steps-row3",
					start: "top 90%",
					end: "bottom bottom",
					endTrigger: ".js-steps-row3",
					scrub: true,
				},
			});

			const tl4 = gsap.timeline({
				scrollTrigger: {
					trigger: ".js-steps-row3",
					start: "top 50%",
					onLeave: () => {
						ScrollTrigger.refresh()
					}
				},
			});

			tl
				.to(".steps__row:nth-child(1)", {
					autoAlpha: 1,
					y: 0,
					duration: 1.5,
				})

			tl1
				.to(block1, {
					x: () => {
						const x1 = getCoords(block1).left + (block1.offsetWidth / 2);
						const x2 = getCoords(blockRotated).left + (blockRotated.offsetWidth / 2);

						return x2 - x1;
					},
					y: () => {
						const y1 = getCoords(block1).top + (block1.offsetHeight / 2);
						const y2 = getCoords(blockRotated).top + (blockRotated.offsetHeight / 2);

						return y2 - y1;
					},
					scale: () => {
						return blockRotated.offsetWidth / block1.offsetWidth;
					},
					rotate: "45deg",
					duration: 1
				})
				.to(".steps__blocks", {
					autoAlpha: 0,
					duration: 1
				})
				.to(".steps__rotated-block-inner", {
					autoAlpha: 1,
				})


			tl1Icons
				.to(".steps__blocks-item-icon", {
					rotate: "-45deg"
				})


			tl2
				.to(block2, {
					autoAlpha: 1
				})
				.to(".js-text-block2", {
					autoAlpha: 1,
					y: 0,
					duration: 1,
				}, "-=1")
				.from(".steps__rotated-block-item", {
					autoAlpha: 0,
					duration: 0.4,
					stagger: 0.4,
				})
				.to(".steps__rotated-block-item", {
					autoAlpha: 0,
				})


			tl3.to(blockRotated, {
				x: () => {
					const xx1 = getCoords(block2).left + (block2.offsetWidth / 2);
					const xx2 = getCoords(block3).left + (block3.offsetWidth / 2);

					return xx2 - xx1;
				},
				y: () => {
					const yy1 = getCoords(block2).top + (block2.offsetHeight / 2);
					const yy2 = getCoords(block3).top + (block3.offsetHeight / 2);

					return yy2 - yy1;
				},
				scale: () => {
					return block3.offsetWidth / block2.offsetWidth;
				},
				rotate: "-45deg",
			})

			tl4
				.to(".js-text-block3", {
					autoAlpha: 1,
					y: 0,
					duration: 1,
				})
				.from(".steps__card", {
					autoAlpha: 0,
					duration: 0.4,
					stagger: 0.4,
				}, "-=1")

			if (document.querySelectorAll(".second__item").length > 1) {
				let cardTmln2 = gsap.timeline({
					scrollTrigger: {
						trigger: ".second",
						start: "top 30%",
						end: "+=" + (window.innerHeight * 2.5),
						pin: true,
						scrub: true,
						anticipatePin: 1,
					}
				});

				cardTmln2.to(".second__item:not(:last-child)", {
					yPercent: -120,
					duration: 1,
					stagger: 1,
				});
			}

		},
		"all": function () {

		}
	});
};
