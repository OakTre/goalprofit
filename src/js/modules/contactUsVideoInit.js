export default () => {
	const video = document.querySelector(".contact-us__video-bg");
	const playBtn = document.querySelector(".contact-us__play-btn");
	const vidWrapper = document.querySelector(".contact-us__video-wrapper");

	playBtn.addEventListener("click", ()=>{
		video.closest(".contact-us__video-wrapper").classList.add("is-active");

		video.play();
	});

	vidWrapper.addEventListener("click", (e)=>{
		let self = e.target;

		if(self.classList.contains("is-active")) {
			self.classList.remove("is-active");

			video.currentTime = 0;
		}
	});

	video.addEventListener("ended", ()=>{
		vidWrapper.classList.remove("is-active");
	});

};
