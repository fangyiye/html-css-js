let idx = 0;

const next = () => {
	const imgs = document.querySelectorAll(".carousel-item");
	const rects = document.querySelectorAll(".rect");
	
	if(idx != 4) {
		imgs[idx].classList.remove("active");
		rects[idx].classList.remove("active");
		idx++;
		imgs[idx].classList.add("active");
		rects[idx].classList.add("active");
	} else {
		imgs[idx].classList.remove("active");
		rects[idx].classList.remove("active");
		idx = 0;
		imgs[idx].classList.add("active");
		rects[idx].classList.add("active");
	}
}

const pre = () => {
	const imgs = document.querySelectorAll(".carousel-item");
	const rects = document.querySelectorAll(".rect");
	
	if(idx != 0) {
		imgs[idx].classList.remove("active");
		rects[idx].classList.remove("active");
		idx--;
		imgs[idx].classList.add("active");
		rects[idx].classList.add("active");
	} else {
		imgs[idx].classList.remove("active");
		rects[idx].classList.remove("active");
		idx = 4;
		imgs[idx].classList.add("active");
		rects[idx].classList.add("active");
	}
}

window.onload = () => {
	const imgs = document.querySelectorAll(".carousel-item");
	const rects = document.querySelectorAll(".rect");
	const leftBtn = document.querySelector(".leftBtn");
	const rightBtn = document.querySelector(".rightBtn");
	
	leftBtn.addEventListener("click", pre);
	rightBtn.addEventListener("click", next);
	
	rects.forEach((value, index) => { // 下方点击矩形跳转到对应图片
		let count;
		value.onclick = () => {
			if (idx > index) {
				count = idx - index;
				for (let i = 0; i < count; i++) {
					leftBtn.click();
				}
			} else{
				count = index - idx;
				for (let i = 0; i < count; i++) {
					rightBtn.click();
				}
			}
		}
	})
}