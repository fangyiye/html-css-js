window.onload = () => {
	const trick = document.querySelector(".trick");
	const leftBtn = document.querySelector(".leftBtn");
	const rightBtn = document.querySelector(".rightBtn");
	let currentImg = 0;  // 当前图片的索引值
	let lock = true;  // 动画锁，防止动画冲突
	
	const initTricks = ()=> {  // 初始化，创建100个div 放在trick盒子
		for (let i = 0; i < 100; i++) {
			const sTrick = document.createElement("div");
			const sTrickStyle = sTrick.style;
			
			sTrickStyle.top = parseInt(i/10)* 40 + "px";
			sTrickStyle.left = (i%10)*65 + "px";
			sTrickStyle.backgroundImage = "url(img/"+(currentImg + 1)+"-pintu.jpg)";
			sTrickStyle.backgroundPosition = ((-i%10)*65)+"px"+" "+(-parseInt(i/10)*40)+"px";
			trick.appendChild(sTrick);
		}
	}
	
	const show = ()=> {
		const tricks = document.querySelectorAll(".trick div");
		tricks.forEach( value => {
			value.style.transitionDelay = Math.floor(Math.random()*600) + "ms";
			setTimeout(()=> {
				value.classList.add("active");
			},50);
		});
		setTimeout(()=> {
			trick.innerHTML = "";
			lock = true;
			setImg();
		},1200);
	}
	
	const setImg = () => {
		const lis = document.querySelectorAll(".imgContain li");
		lis[currentImg].classList.add("active");
		lis.forEach( (value, index) => {
			if (index != currentImg) {
				value.classList.remove("active");
			}
		})
	}
	
	rightBtn.onclick = ()=> {
		if (!lock) {
			return;
		}
		lock = false;
		
		currentImg++;
		if (currentImg > 4) {
			currentImg = 0;
		}
		initTricks();
		show();
	}
	
	
	leftBtn.onclick = ()=> {
		if (!lock) {
			return;
		}
		lock = false;
		
		currentImg--;
		if (currentImg < 0) {
			currentImg = 4;
		}
		initTricks();
		show();
	}
}
