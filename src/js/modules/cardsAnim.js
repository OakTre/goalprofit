import gsap, { to } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/gsap-core";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.matchMedia({
		"(min-width: 1030px)": function () {
			const playAnim = () => {
				if (window.matchMedia("(min-width: 992px)").matches) {
					const timeline = new TimelineLite();

					if (!document.querySelector(".steps__rotated-block")) return;

					gsap.set(".steps__rotated-block", { opacity: 0 });
					gsap.set(".js-text-block2", { opacity: 0 });
					gsap.utils.toArray(".steps__rotated-block-item").forEach((item) => {
						gsap.set(item, { opacity: 0 })
					});
					gsap.utils.toArray(".steps__card").forEach((item) => {
						gsap.set(item, { opacity: 0 });
						// gsap.set(item.querySelector(".steps__card-content-wrapper"), {
						// 	opacity: 0
						// })
					});

					timeline
						.to(".steps__blocks", {
							scrollTrigger: {
								trigger: ".steps__blocks",
								start: "+50px 30%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								pin: true,
								pinSpacing: false,
							},
							rotation: 45,
							x: "-63rem",
							width: "42.2rem",
							height: "42.2rem",
							opacity: 0
						})
						.to(".js-text-block2", {
							scrollTrigger: {
								trigger: ".js-text-block2",
								start: "+2rem 30%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								// pin: true,
								pinSpacing: false,
							},
							opacity: 1
						})
						.to(".steps__rotated-block", {
							scrollTrigger: {
								trigger: ".steps__rotated-block",
								start: "1rem 7%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								pin: ".js-rotated-block",
								// pinSpacing: false,
							},
							opacity: 1
						})
						.to(".steps__rotated-block-item", {
							scrollTrigger: {
								trigger: ".steps__rotated-block-item",
								start: "+5rem 11%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								// pin: ".js-rotated-block",
								// pinSpacing: false,
							},
							opacity: 1
						})

					const tml2 = gsap.timeline({
						scrollTrigger: {
							trigger: ".steps__card:nth-child(1)",
							// scrub: true,
						}
					});

					tml2.to(".steps__card:nth-child(1)", {
						opacity: 1,
						duration: 1,
						delay: 0.6,
					});

					const tml3 = gsap.timeline();

					gsap.utils.toArray(".steps__card").forEach((item) => {
						tml3.to(item, {
							scrollTrigger: {
								trigger: item,
								end: "-=4rem",
							},
							opacity: 1,
							duration: 2,
							ease: "power2.out"
						});
					});
				}
			};


			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".first",
					start: "top top",
					end: "+=" + (window.innerHeight * 2.5),
					pin: true,
					anticipatePin: true,
					scrub: true,
					toggleActions: "none none reverse none",
					onLeave: () => {
						playAnim();
					}
				}
			})

			gsap.utils.toArray(".first__item:not(:last-child)").forEach(card => {
				cardTmln.to(card, { yPercent: -100 });
			});
		},
		"(max-width: 1028px)": function () {
			const playAnim = () => {
				if (window.matchMedia("(min-width: 992px)").matches) {
					const timeline = new TimelineLite();

					if (!document.querySelector(".steps__rotated-block")) return;

					gsap.set(".steps__rotated-block", { opacity: 0 });
					gsap.set(".js-text-block2", { opacity: 0 });
					gsap.utils.toArray(".steps__rotated-block-item").forEach((item) => {
						gsap.set(item, { opacity: 0 })
					});
					gsap.utils.toArray(".steps__card").forEach((item) => {
						gsap.set(item, { opacity: 0 });
						gsap.set(item.querySelector(".steps__card-content-wrapper"), {
							opacity: 0
						})
					});

					timeline
						.to(".steps__blocks", {
							scrollTrigger: {
								trigger: ".steps__blocks",
								start: "+50px 30%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								pin: true,
								pinSpacing: false,
							},
							rotation: 45,
							x: "-63rem",
							width: "42.2rem",
							height: "42.2rem",
							opacity: 0
						})
						.to(".js-text-block2", {
							scrollTrigger: {
								trigger: ".js-text-block2",
								start: "+2rem 30%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								// pin: true,
								pinSpacing: false,
							},
							opacity: 1
						})
						.to(".steps__rotated-block", {
							scrollTrigger: {
								trigger: ".steps__rotated-block",
								start: "1rem 7%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								pin: ".js-rotated-block",
								// pinSpacing: false,
							},
							opacity: 1
						})
						.to(".steps__rotated-block-item", {
							scrollTrigger: {
								trigger: ".steps__rotated-block-item",
								start: "+5rem 11%",
								// end: "+=" + (window.innerHeight * 2),
								scrub: true,
								// pin: ".js-rotated-block",
								// pinSpacing: false,
							},
							opacity: 1
						})

					const tml2 = gsap.timeline({
						scrollTrigger: {
							trigger: ".steps__card:nth-child(1)",
							// scrub: true,
						}
					});

					tml2.to(".steps__card:nth-child(1)", {
						opacity: 1,
						duration: 1,
						delay: 0.6,
					});

					gsap.utils.toArray(".steps__card:not(:first-child)").forEach((item) => {
						const tml3 = gsap.timeline({
							scrollTrigger: {
								trigger: item,
								start: "top 50%"
							}
						});

						tml3.to(item, {
							opacity: 1,
							duration: 1,
							delay: 0.6,
						});
					});
				}
			};


			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".first",
					start: "top 20%",
					end: "+=" + (window.innerHeight * 2.5),
					pin: true,
					anticipatePin: true,
					scrub: true,
					toggleActions: "none none reverse none",
					onLeave: () => {
						playAnim();
					}
				}
			})

			gsap.utils.toArray(".first__item:not(:last-child)").forEach(card => {
				cardTmln.to(card, { yPercent: -100 });
			});
		},
		"(max-width: 992px)": function () {
			if (!document.querySelector(".first")) return;

			let cardTmln = gsap.timeline({
				scrollTrigger: {
					trigger: ".first",
					start: "top 20%",
					end: "+=" + (window.innerHeight * 2.5),
					pin: true,
					anticipatePin: true,
					scrub: true,
					toggleActions: "none none reverse none",
				}
			})

			gsap.utils.toArray(".first__item:not(:last-child)").forEach(card => {
				cardTmln.to(card, { yPercent: -100 });
			});
		},
		"all": function () {

		}
	});

	let test = () => {
		let cardTmln2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".second",
				start: "top 2rem",
				end: "+=" + (window.innerHeight * 2.5),
				pin: true,
				anticipatePin: true,
				scrub: true,
				toggleActions: "none none reverse none",
			}
		})

		gsap.utils.toArray(".second__item:not(:last-child)").forEach(card => {
			cardTmln2.to(card, { yPercent: -100 });
		});
	}
};
