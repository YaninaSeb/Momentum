 
 let keyLang ='en';
 
 /*ПРИВЕТСТВИЕ*/

 const greeting = document.querySelector('.greeting') //находим элемент с классом time

 function showGreeting() {
     const date = new Date();
     const hours = date.getHours();
 
     function getTimeOfDay() { //функция для вычисления времени суток
         if (hours>=0 && hours <6) {
             return "night"
         }
         else if (hours>=6 && hours <12) {
             return "morning"
         }
         else if (hours>=12 && hours <18) {
             return "day"
         }
         else if (hours>=18 && hours <24) {
             return "evening"
         }
     }

     function getTimeOfDayRu() { //функция для вычисления времени суток
        if (hours>=0 && hours <6) {
            return "Доброй ночи"
        }
        else if (hours>=6 && hours <12) {
            return "Доброе утро"
        }
        else if (hours>=12 && hours <18) {
            return "Добрый день"
        }
        else if (hours>=18 && hours <24) {
            return "Добрый вечер"
        }
    }

     if (keyLang == "en") { 
        const timeOfDay = getTimeOfDay(); //генерация текста приветсвия 
        const greetingText = `Good ${timeOfDay}`;
        greeting.textContent = greetingText; //отображение внутри элемента текста
        (document.querySelector('.name')).setAttribute("placeholder" , "[Enter name]");
    }
     else if (keyLang = "ru") { 
         const timeOfDay = getTimeOfDayRu(); //генерация текста приветсвия 
        const greetingText = `${timeOfDay}`;
        greeting.textContent = greetingText; //отображение внутри элемента текста
        (document.querySelector('.name')).setAttribute("placeholder" , "[Введите имя]")
    }
 
 }
        
        
        /* ДЕНЬ НЕДЕЛИ-МЕСЯЦ*/
 
 const dateAndMonth = document.querySelector('.date') //находим элемент с классом date
 
 function showDate(){
 const date = new Date(); //получаем всю дату 


 if (keyLang == "en") { 
    const options = {weekday: 'long', month: 'long', day: 'numeric'}; // это параметр след функции, это язык отображения даты
    const currentDate = date.toLocaleDateString('en-US', options); //метод для вывода только время
    dateAndMonth.textContent = currentDate; //отображение внутри элемента текста
}
 else if (keyLang = "ru") { 
    const optionsWeekday = {weekday: 'long'}; // это параметр след функции, это язык отображения даты
    const options = {day: 'numeric', month: 'long'}; // это параметр след функции, это язык отображения даты
    const currentWeekday = date.toLocaleDateString('ru-RU', optionsWeekday); //метод для вывода только время
    const currentDate = date.toLocaleDateString('ru-RU', options); //метод для вывода только время
    dateAndMonth.textContent = currentWeekday[0].toUpperCase()+currentWeekday.slice(1)+ ", " + currentDate; //отображение внутри элемента текста
}
  
 
 }
 
         /* ВРЕМЯ*/
 
 const time = document.querySelector('.time') //находим элемент с классом time
 
 function showTime() {
     const date = new Date(); //получаем всю дату 
     const currentTime = date.toLocaleTimeString(); //метод для вывода только время
     time.textContent = currentTime; //отображение внутри элемента текста, но это не динамически изменяемое время
 
     setTimeout(showTime, 1000); // это рекурсивная функция, которая вызывает сама себя с интервалом в 1000 миллисекунд.
 
     showDate(); //функция для дня недели именно здесь, чтобы обновлялось значение в 24:00
 
     showGreeting(); //функция для приветствия именно здесь, чтобы обновлялось значение для разного времени суток
 
 }
 
 showTime();
 
 

 const languageEnglish = document.querySelector('.language-english'); // input

 languageEnglish.addEventListener('change', () => {
     if(languageEnglish.checked) {
        keyLang = 'en';
         showGreeting()
     } 
 });
 
 
 const languageRussian = document.querySelector('.language-russian'); // input
 
 languageRussian.addEventListener('change', () => {
     if(languageRussian.checked) {
        keyLang = 'ru';
         showGreeting();
         showDate()
     } 
 });









 
         /*При перезагрузке страницы приложения имя пользователя сохраняется*/
 
 const name = document.querySelector('.name');
 
 //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
 function setLocalStorage() {
     localStorage.setItem('name', name.value);
 }
 window.addEventListener('beforeunload', setLocalStorage) 
 
 //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
 function getLocalStorage() {
     if(localStorage.getItem('name')) {
       name.value = localStorage.getItem('name');
     }
   }
   window.addEventListener('load', getLocalStorage)