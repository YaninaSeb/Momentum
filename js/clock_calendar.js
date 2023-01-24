let keyLang ='en';

/*ПРИВЕТСТВИЕ*/
const greeting = document.querySelector('.greeting');

function showGreeting() {
  const date = new Date();
  const hours = date.getHours();
  const greetingText = getTimeOfDay(hours, keyLang);
  greeting.textContent = greetingText;
  if (keyLang == "en") {
    (document.querySelector('.name')).setAttribute("placeholder" , "[Enter name]");
  } else if (keyLang == "ru") { 
    (document.querySelector('.name')).setAttribute("placeholder" , "[Введите имя]")
  }
}

function getTimeOfDay(hours, lang) {
  if (hours>=0 && hours <6) {
    return lang === "en" ? "Good night" : "Доброй ночи";
  } else if (hours>=6 && hours <12) {
    return lang === "en" ? "Good morning" : "Доброе утро";
  } else if (hours>=12 && hours <18) {
    return lang === "en" ? "Good day" : "Добрый день";
  } else if (hours>=18 && hours <24) {
    return lang === "en" ? "Good evening" : "Добрый вечер";
  }
}

/* ДЕНЬ НЕДЕЛИ-МЕСЯЦ*/
const dateAndMonth = document.querySelector('.date');

function showDate(){
  const date = new Date();

  if (keyLang == "en") {
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateAndMonth.textContent = currentDate;
  } else if (keyLang = "ru") { 
    const optionsWeekday = {weekday: 'long'};
    const options = {day: 'numeric', month: 'long'};
    const currentWeekday = date.toLocaleDateString('ru-RU', optionsWeekday);
    const currentDate = date.toLocaleDateString('ru-RU', options);
    dateAndMonth.textContent = currentWeekday[0].toUpperCase()+currentWeekday.slice(1)+ ", " + currentDate;
  }
}

/* ВРЕМЯ*/
const time = document.querySelector('.time');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreeting();
}
showTime();

const languageEnglish = document.querySelector('.language-english');
languageEnglish.addEventListener('change', () => {
  if(languageEnglish.checked) {
    keyLang = 'en';
    showGreeting()
  }
});

const languageRussian = document.querySelector('.language-russian');
languageRussian.addEventListener('change', () => {
  if(languageRussian.checked) {
    keyLang = 'ru';
    showGreeting();
    showDate();
  }
});

/*При перезагрузке страницы приложения имя пользователя сохраняется*/
const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);
