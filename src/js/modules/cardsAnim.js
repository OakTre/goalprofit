import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	const playAnim = () => {
		const timeline = gsap.timeline();

		gsap.set(".steps__rotated-block", {opacity: 0});

		ScrollTrigger.create({
			animation: timeline,
			trigger: ".steps__blocks",
			start: "+100px 20%",
			end: "+=" + (window.innerHeight * 2),
			scrub: true,
			pin: true,
			// pinSpacing: false,
		})

		timeline
			.to(".steps__blocks", {
				rotation: 45,
				x: "-63rem",
				y: "67rem",
				width: "42.2rem",
				height: "42.2rem",
				autoAlpha: 0
			})
			.to(".steps__rotated-block", {
				opacity: 1
			})
			.from(".steps__rotated-block-item", {
				opacity: 0
			})
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
};
