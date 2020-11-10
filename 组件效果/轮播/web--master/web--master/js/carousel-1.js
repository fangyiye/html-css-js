/* 定义位置对象 */
const pos = {
	posA: { "left": -100 },
	posB: { "left": 275 },
	posC: { "left": 925 },
	posD: { "left": 1300 }
};

/* 存储位置数组 */
let posArr = [
	pos.posA,
	pos.posB,
	pos.posC,
	pos.posD,
	pos.posD,
];

let zindex = [3,3,3,1,1];

let idx = 1;  // 定义图片信号值，位置默认为第二张图片

const initPos = () => {  // 图片位置初始化
	const lis = document.querySelectorAll(".imgContain img");
	lis.forEach((value, index) => {
		value.style.left = posArr[index].left + "px";
		value.style.zIndex = zindex[index];
	})
}

const initProgress = () => { // 进度条初始化
	const progress = document.querySelector(".progress");
	let percent = (idx / 4) * 100;
	if (percent == 100) {
		percent = 99
	} else if (percent == 0) {
		percent = 1
	}
	progress.style.width = percent + "%";
}

window.onload = () => {
	const leftBtn = document.querySelector(".leftBtn");
	const rightBtn = document.querySelector(".rightBtn");
	const lis = document.querySelectorAll(".imgContain img");
	
	/* 调用方法初始化 */
	initPos();
	initProgress();
	
	leftBtn.onclick = () => {
		posArr.push(posArr.shift());  // 改变位置数组，将数组最后一项放在第一项位置
		
		// 调用方法改变位置
		initPos();
		initProgress();
		if (idx == 0) {
			lis[idx].classList.remove("active");
			idx = 4;
			lis[idx].classList.add("active");
		} else {
			lis[idx].classList.remove("active");
			idx--;
			lis[idx].classList.add("active");
		}
		console.log(idx)
	}
	
	rightBtn.onclick = () => {
		if (idx == 4) {
			lis[idx].classList.remove("active");
			idx = 0;
			lis[idx].classList.add("active");
		} else {
			lis[idx].classList.remove("active");
			idx++;
			lis[idx].classList.add("active");
		}
		posArr.unshift(posArr.pop()); // 改变位置数组，将第一项放在数组的最后一项
		initPos();
		initProgress();
	}
}