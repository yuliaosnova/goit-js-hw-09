const bodyEl = document.querySelector("body");
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let timerId = null;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startBtn.addEventListener("click", () => {
	startBtn.disabled = true;
	stopBtn.disabled = false;

	timerId = setInterval(() => {
		
	const color = getRandomHexColor();
	bodyEl.style.backgroundColor = color;
	}, 1000);

	
});
 
 stopBtn.addEventListener("click", () => {
	startBtn.disabled = false;
	stopBtn.disabled = true;

	clearInterval(timerId)
});