import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  inputEl: document.querySelector('#datetime-picker'),
};


const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
  console.log(selectedDates[0]);
  if (selectedDates[0] <= Date.now()) {
	//  window.alert('Please choose a date in the future');
	 Notiflix.Notify.failure('Please choose a date in the future');
  } else {
	 refs.startBtn.disabled = false;
	 endTime = selectedDates[0];
	}
},
};

flatpickr(refs.inputEl, options);
refs.startBtn.disabled = true;
let endTime = null;

class Timer {
	constructor() {
		this.intervalId = null;
		this.isActive = false;
	}
	
	start(){
		this.isActive = true;


	this.intervalId = setInterval(() =>{
		const startTime = Date.now();
		const deltaTime = endTime - startTime;
		console.log(deltaTime);
		const ms = convertMs(deltaTime);

		if (deltaTime <= 1000){
		clearInterval(intervalId);
	}

		this.updateClockFace(ms);
		}, 1000);
	}

	updateClockFace({ days, hours, minutes, seconds}) {
	refs.days.textContent = `${days}:`;
	refs.hours.textContent = `${hours}:`;
	refs.minutes.textContent = `${minutes}:`;
	refs.seconds.textContent = `${seconds}`;
}};

const timer = new Timer();
refs.startBtn.addEventListener('click', () => timer.start());


// Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

// -Принимает время в миллисекундах
// -Высчитывает сколько в них вмещается дней/часов/минут/секунд
// -Возвращает объект со свойствами days, hours, mins, seconds

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
 
	// Remaining days
	const days = addLeadingZero(Math.floor(ms / day));
	// Remaining hours
	const hours = addLeadingZero(Math.floor((ms % day) / hour));
	// Remaining minutes
	const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
	// Remaining seconds
	const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
 
	return { days, hours, minutes, seconds };
 }

 