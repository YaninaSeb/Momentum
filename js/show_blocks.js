/* видимый блок времени */
const checkedTime = document.querySelector('.show-time');
const blockTime = document.querySelector('.time');
let keyShowTime;

checkedTime.addEventListener('change', () => {
  if(!checkedTime.checked) {
    blockTime.style.opacity = '0';
    keyShowTime="no-show";
  } else {
    blockTime.style.opacity = '1';
    keyShowTime="show";
  }
});

/* видимый блок даты */
const checkedDate = document.querySelector('.show-date');
const blockDate = document.querySelector('.date');

checkedDate.addEventListener('change', () => {
  if(!checkedDate.checked) {
    blockDate.style.opacity = '0';
  } else {
    blockDate.style.opacity = '1';
  }
});

/* видимый блок приветствия */
const checkedGreeting = document.querySelector('.show-greeting');
const blockGreeting = document.querySelector('.greeting-container');
checkedGreeting.addEventListener('change', () => {
  if(!checkedGreeting.checked) {
    blockGreeting.style.opacity = '0';
  } else {
    blockGreeting.style.opacity = '1';
  }
});

/* видимый блок цитат */
const checkedQuote = document.querySelector('.show-quote');
const blockQuote = document.querySelectorAll('.quote-container');
checkedQuote.addEventListener('change', () => {
  if(!checkedQuote.checked) {
    blockQuote[0].style.opacity = '0';
    blockQuote[1].style.opacity = '0';
  } else {
    blockQuote[0].style.opacity = '1';
    blockQuote[1].style.opacity = '1';
  }
});

/* видимый блок погоды */
const checkedWeather = document.querySelector('.show-weather');
const blockWeather = document.querySelector('.weather');
checkedWeather.addEventListener('change', () => {
  if(!checkedWeather.checked) {
    blockWeather.style.opacity = '0';
  } else {
    blockWeather.style.opacity = '1';
  }
});

/* видимый блок аудио */
const checkedAudio = document.querySelector('.show-audio');
const blockAudio = document.querySelectorAll('.block-audio');
checkedAudio.addEventListener('change', () => {
  if(!checkedAudio.checked) {
    blockAudio[0].style.opacity = '0';
    blockAudio[1].style.opacity = '0';
  } else {
    blockAudio[0].style.opacity = '1';
    blockAudio[1].style.opacity = '1';
  }
});
