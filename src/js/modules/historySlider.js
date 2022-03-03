export default () => {
	const slider = document.querySelector(".js-history-slider");
    const slides = document.querySelectorAll(".history-item:not(:first-child)");
    let num = 2;

    slides.forEach((item)=>{
        num = num*2;
        item.style.top = num + "rem";
    });
};
