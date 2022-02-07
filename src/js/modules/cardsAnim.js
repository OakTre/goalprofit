import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	let cardTmln = gsap.timeline({
		scrollTrigger: {
			trigger: ".first",
			scrub: true,
			scrub: 2,
			pin: true,
			// fastScrollEnd: true,
			// preventOverlaps: true,
			snap: 0.1,
			//   pinSpacing: false
		},
		defaults: { duration: 8 }
	})

	gsap.utils.toArray(".first__item:not(:last-child)").forEach(card => {
		cardTmln.to(card, { y: "-170%"});
	});
};
