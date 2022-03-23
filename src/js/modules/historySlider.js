import gsap from "gsap";

export default () => {
	const slider = document.querySelector(".js-history-slider");
	const prevBtn = document.querySelector(".js-history-button-prev");
	const nextBtn = document.querySelector(".js-history-button-next");
	const initialSlides = Array.from(document.querySelectorAll(".history-item"));
	const slidesLength = Number(initialSlides.length);
	let activeIndex = slidesLength;

	let arr = [];

	initialSlides.forEach(elmnt=>{
		let copy = elmnt.cloneNode(true);
		copy.classList.add("copied");
		slider.append(copy);
	});

	for (let i = slidesLength - 1; i>=0; i--) {
		let copy = initialSlides[i].cloneNode(true);
		copy.classList.add("copied");
		slider.prepend(copy);
	}


	function setActive(i) {
		const slides = document.querySelectorAll(".history-item");
		let y = i % (slidesLength * 3);

		console.log("y: " + y);

		console.log("start: "+ i);

		i = i % slidesLength + slidesLength;

		console.log("end: "+ i);
		console.log(slidesLength * 2 - 1);

		if (y === slidesLength - 2) {
			for (let i = slidesLength * 3 - 1; i>=slidesLength * 2; i--) {
				let elmntFirst = slides[i];
				elmntFirst.classList.add("test-top");
				slider.prepend(elmntFirst);

			}
		} else if (i === slidesLength * 2 - 1) {

			for (let i = 0; i<=slidesLength-1; i++) {
				let elmntFirst = slides[i];

				elmntFirst.classList.add("test-bottom");

				slider.append(elmntFirst);
			}

		};

		slides.forEach((slide, index)=> {
			if (index == i-1) {
				slide.classList.remove("active-last", "active-3", "active-2", "active-1");
				slide.classList.add("active--1");
			} else if  (index == i) {
				slide.classList.remove("active-last", "active-3", "active-2", "active--1");
				slide.classList.add("active-1");
			} else if (index == i+1) {
				slide.classList.remove("active-last", "active-3", "active-1", "active--1");
				slide.classList.add("active-2");
			} else if (index == i+2) {
				slide.classList.remove("active-last", "active-2", "active-1", "active--1");
				slide.classList.add("active-3");
			}else if (index == i+3) {
				slide.classList.remove("active-3", "active-2", "active-1", "active--1");
				slide.classList.add("active-last");
			} else {
				slide.classList.remove("active-3", "active-2", "active-1", "active--1", "active-last");
			}
		});
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
