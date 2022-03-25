import gsap from "gsap";

export default () => {
	const slider = document.querySelector(".js-history-slider");

	if (!slider) return;

	if (window.matchMedia("(max-width: 767px)").matches) return;

	const prevBtn = document.querySelector(".js-history-button-prev");
	const nextBtn = document.querySelector(".js-history-button-next");
	const initialSlides = Array.from(document.querySelectorAll(".history-item"));
	const slidesLength = Number(initialSlides.length);
	let activeIndex = slidesLength;

	function setActive(i) {
		const slides = document.querySelectorAll(".history-item");
		let y = i % (slidesLength * 3);

		i = i % slidesLength + slidesLength;

		if (y === slidesLength - 2) {
			for (let i = slidesLength * 3 - 1; i>=slidesLength * 2; i--) {
				let elmntFirst = slides[i];
				elmntFirst.classList.add("test-top");

				setTimeout(() => {
					slider.prepend(elmntFirst);
				}, 550);
			}
		} else if (i === slidesLength * 2 - 1) {

			for (let i = 0; i<=slidesLength-1; i++) {
				let elmntFirst = slides[i];

				elmntFirst.classList.add("test-bottom");

				setTimeout(() => {
					slider.append(elmntFirst);
				}, 550);

			}

		};

		slides.forEach((slide, index)=> {
			switch (index) {
				case i-1:
					slide.classList.remove("active-last", "active-3", "active-2", "active-1");
					slide.classList.add("active--1");
					break;
				case i:
					slide.classList.remove("active-last", "active-3", "active-2", "active--1");
					slide.classList.add("active-1");
					break;
				case i+1:
					slide.classList.remove("active-last", "active-3", "active-1", "active--1");
					slide.classList.add("active-2");
					break;
				case i+2:
					slide.classList.remove("active-last", "active-2", "active-1", "active--1");
					slide.classList.add("active-3");
					break;
				case i+3:
					slide.classList.remove("active-3", "active-2", "active-1", "active--1");
					slide.classList.add("active-last");
					break;
				default:
					slide.classList.remove("active-3", "active-2", "active-1", "active--1", "active-last");
					break;
			}
		});
	}

	initialSlides.forEach(elmnt=>{
		let copy = elmnt.cloneNode(true);
		copy.classList.add("copied");
		slider.append(copy);
	});

	for (let i = slidesLength- 1; i>=0 ; i--) {
		let copy = initialSlides[i].cloneNode(true);
		copy.classList.add("copied");
		slider.prepend(copy);
	}

	setActive(activeIndex);

	nextBtn.addEventListener("click", ()=>{
		activeIndex = activeIndex + 1;

		setActive(activeIndex);
	});

	prevBtn.addEventListener("click", ()=>{
		activeIndex = activeIndex - 1;
		setActive(activeIndex);
	});

};
