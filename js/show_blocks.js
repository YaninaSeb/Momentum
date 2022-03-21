                     
           /* видимый блок времени */
const checkedTime = document.querySelector('.show-time'); // input
const blockTime = document.querySelector('.time'); // block
let keyShowTime;

checkedTime.addEventListener('change', () => {
    if(!checkedTime.checked) {
        blockTime.style.opacity = '0';
        keyShowTime="no-show"
    } else {
        blockTime.style.opacity = '1';
        keyShowTime="show"
    }
});


            /* видимый блок даты */
const checkedDate = document.querySelector('.show-date'); // input
const blockDate = document.querySelector('.date'); // block

checkedDate.addEventListener('change', () => {
    if(!checkedDate.checked) {
        blockDate.style.opacity = '0';
    } else {
        blockDate.style.opacity = '1';
    }
});


          /* видимый блок приветствия */
const checkedGreeting = document.querySelector('.show-greeting'); // input
const blockGreeting = document.querySelector('.greeting-container'); // block

checkedGreeting.addEventListener('change', () => {
    if(!checkedGreeting.checked) {
        blockGreeting.style.opacity = '0';
    } else {
        blockGreeting.style.opacity = '1';
    }
});



            /* видимый блок цитат */
const checkedQuote = document.querySelector('.show-quote'); // input
const blockQuote = document.querySelectorAll('.quote-container'); // block

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
const checkedWeather = document.querySelector('.show-weather'); // input
const blockWeather = document.querySelector('.weather'); // block

checkedWeather.addEventListener('change', () => {
    if(!checkedWeather.checked) {
        blockWeather.style.opacity = '0';
    } else {
        blockWeather.style.opacity = '1';
    }
});


            /* видимый блок аудио */
const checkedAudio = document.querySelector('.show-audio'); // input
const blockAudio = document.querySelectorAll('.block-audio'); // block

checkedAudio.addEventListener('change', () => {
    if(!checkedAudio.checked) {
        blockAudio[0].style.opacity = '0';
        blockAudio[1].style.opacity = '0';
    } else {
        blockAudio[0].style.opacity = '1';
        blockAudio[1].style.opacity = '1';  
    }
});        



           //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
 function setLocalStorage() {
    localStorage.setItem('keyShowTime', keyShowTime);
    
    
}
window.addEventListener('beforeunload', setLocalStorage) 


//перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorage() {
    if (localStorage.getItem('keyShowTime')) {
        keyShowTime = localStorage.getItem('keyShowTime')
      }     
      const currentBlockTime = document.querySelector('.time');
            if (keyShowTime === 'show') {currentBlockTime.setAttribute("checked", "" )}
            if (keyShowTime === 'no-show') {document.querySelector('.time').removeAttribute("checked")}
      //console.log(keyShowTime);

    }

window.addEventListener('load', getLocalStorage)

 
  