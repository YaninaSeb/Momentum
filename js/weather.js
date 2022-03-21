
const city = document.querySelector('.city');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError = document.querySelector('.weather-error');


const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let error;
let keyWeather = "en";


async function getWeather() {  

  //if (keyWeather == "ru" && city.value =='Minsk') {city.value='Минск'}
  //else if (keyWeather == "en" ) {city.value='Minsk'}

   try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${keyWeather}&appid=c58e8b531b563c4184bcffd371d4808b&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`); //иконке погоды добавили класс

    weatherError.textContent=" ";
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;

    if (keyWeather == "en") {
      if (keyWeather == "en" && city.value =='Минск') {city.value='Minsk'}

      wind.textContent = "Wind speed: " + Math.floor(data.wind.speed) + " m/s";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
    }
    else if (keyWeather == "ru") {
      if (keyWeather == "ru" && city.value =='Minsk') {city.value='Минск'}

      wind.textContent = "Скорость ветра: " + Math.floor(data.wind.speed) + " м/с";
      humidity.textContent = "Влажность: " + data.main.humidity + "%";
    }
    
    } catch (err) {  //обработка ошибок
        if (city.value == "") {
          weatherError.textContent = `Error! Nothing to geocode for ''! ` ;
          temperature.textContent = " ";
          weatherDescription.textContent = " ";
          wind.textContent = " ";
          humidity.textContent = " ";
        } else {
          weatherError.textContent=`Error! city not found for '${city.value}' !`  ;
          temperature.textContent = " ";
          weatherDescription.textContent = " ";
          wind.textContent = " ";
          humidity.textContent = " ";
        }
    }
}
  
  
  document.addEventListener('DOMContentLoaded', getWeather);

  city.addEventListener('change', getWeather)



 function findError(){
  if (!city.value) {
    error.textContent = "Error! city not found for '`{city.value}`'! "  
    }
  if (city.value === '') {
    error.textContent = "Error! Nothing to geocode for ''!"
    }
}



                      /*события для перевода на другой язык */

const weatherEnglish = document.querySelector('.language-english'); // input

weatherEnglish.addEventListener('change', () => {
      if(weatherEnglish.checked) {
         keyWeather = 'en';
         getWeather()
      } 
  });
  
  
  const weatherRussian = document.querySelector('.language-russian'); // input
  
  weatherRussian.addEventListener('change', () => {
      if(weatherRussian.checked) {
        keyWeather = 'ru';
        getWeather()
      } 
  });



 
 //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
 function setLocalStorage() {
     localStorage.setItem('city', city.value);
 }
 window.addEventListener('beforeunload', setLocalStorage) 
 
 //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
 function getLocalStorage() {
     if(localStorage.getItem('city')) {
        city.value = localStorage.getItem("city");
        getWeather()
     }
   }
   window.addEventListener('load', getLocalStorage)