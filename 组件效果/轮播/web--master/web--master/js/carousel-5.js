window.onload = ()=> {
	const leftBtn = document.querySelector(".leftBtn");
	const rightBtn = document.querySelector(".rightBtn");
	let idx = 0;  // 记录点击的次数
	let angle = 90;  // 转动的角度
	let delay = 200; // 动画延时
	
	// 让每一个 imgContain 转动 ， 并加上延时
	const initPos = () => {
		const imgContain = document.querySelectorAll(".imgContain");
		imgContain.forEach((value, index) => {
			value.style.transform = "rotateY("+ (angle * idx) +"deg)";
			value.style.transitionDelay = (delay * index) + "ms";
		});
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