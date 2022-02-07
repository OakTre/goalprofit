import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	// const timeline = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".steps__blocks",
	// 		scrub: true,
	// 		pin: true,
	// 		pinSpacing: false,
	// 	}
	// });

	// timeline
	// 	.to(".steps__blocks", {rotation: 45, x: -200, y: -200, duration: 3});

};
