import gsap from "gsap";

export default ()=>{

	function disableScroll() {
		let pagePosition = window.scrollY;
		lockPadding();
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	function enableScroll() {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		unlockPadding();
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}

	function lockPadding() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.style.paddingRight = paddingOffset;
	}

	function unlockPadding() {
		document.body.style.paddingRight = '0px';
	}


	const timeline = gsap.timeline({
		paused: true,
		reversed: true
	});

	const menuBtn = document.querySelector(".js-open-mobile-menu");

	const isReversed = (tmln) => {
		tmln.reversed() ?  tmln.play() : tmln.reverse();
	}

	const body = document.querySelector("body");

	const isLocked = () => {
		body.classList.contains("disable-scroll") ? enableScroll() : disableScroll();
	}

	gsap.set(".mobile-menu", {xPercent: -100});

	timeline.
		to(".mobile-menu", {xPercent: 0, duration: 0.5, ease: "expo.out"});


	menuBtn.addEventListener("click", ()=>{
		isReversed(timeline);
		menuBtn.classList.toggle("is-active");
		isLocked();
	});
};
