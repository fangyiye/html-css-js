window.onload = () => {
	
	const leftBtn = document.querySelector(".leftBtn");
	const rightBtn = document.querySelector(".rightBtn");
	let idx = 0;
	let angle = 90;
	
	const initPos = () => {
		const imgContain = document.querySelector(".imgContain");
		imgContain.style.transform = "translateX(-50%) rotateX("+ (angle * idx) +"deg)";
	}
	
	const next = () => {
		idx++;
		initPos();
	}
	
	const pre = () => {
		idx--;
		initPos();
	}
	
	leftBtn.addEventListener("click", pre);
	rightBtn.addEventListener("click", next);
	initPos();
	
}