function getTimeOfDay_slide() {
  const date = new Date();
  const hours = date.getHours();

  if (hours>=0 && hours <6) {
    return "night"
  } else if (hours>=6 && hours <12) {
    return "morning"
  } else if (hours>=12 && hours <18) {
    return "afternoon"
  } else if (hours>=18 && hours <24) {
    return "evening"
  }
}

let timeOfDay = getTimeOfDay_slide();
let body = document.querySelector('body');
let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');
let key="one";

//смена слайдов в зависимости от времени суток
let randomNum;

function getRandomNum() {
  randomNum = Math.floor(Math.random() * 20 + 1);
  return randomNum;
}
getRandomNum();

let bgNum = (String(randomNum)).padStart(2,0); 

function setBg() {
  if (key == 'one' || key == undefined) {
    const img = new Image();
    img.src = `assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('assets/images/${timeOfDay}/${bgNum}.jpg')`;
    };
  } else if (key == 'two') {
    setBgUnsplash();
  } else if (key == 'three') {
    setBgFlickr();
  }
}
setBg();

async function setBgUnsplash() {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=vPyliAhk71SVKwXHD9LsEMPdZcnTh0OEjqej-urq9ng`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src  = `${data.urls.regular}`;
  img.onload = () => {
    body.style.backgroundImage = `url('${data.urls.regular}')`;
  };
}

async function setBgFlickr() {
  const random = Math.floor(Math.random()*99);
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fa09194f6cc2128894b4dbd907d4ffe4&tags=${timeOfDay}&extras=url_l&width_l=1024&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src  = `${data.photos.photo[random].url_l}`;
  img.onload = () => {
    body.style.backgroundImage = `url('${data.photos.photo[random].url_l}')`;
  };
}

function getSliderNext() {
  if (key == 'one' || key == undefined) {
    randomNum = randomNum == 21 ? 1 : randomNum + 1;
    bgNum = (String(randomNum)).padStart(2,0);
  }
  setBg();
}

function getSliderPrev() {
  if (key == 'one' || key == undefined) {
    randomNum = randomNum == 0 ? 20 : randomNum - 1;
    bgNum = (String(randomNum)).padStart(2,0);
  }
  setBg();
}

slideNext.addEventListener('click', getSliderNext);
slidePrev.addEventListener('click', getSliderPrev);

const sourceGithub = document.querySelector('.source-github');

sourceGithub.addEventListener('change', () => {
  if(sourceGithub.checked) {
    key = 'one';
    setBg();
  }
});

const sourceUnsplash = document.querySelector('.source-unsplash');
sourceUnsplash.addEventListener('change', () => {
  if(sourceUnsplash.checked) {
    key = 'two';
    setBg()
  }
});

const sourceFlickr = document.querySelector('.source-flickr');
sourceFlickr.addEventListener('change', () => {
  if(sourceFlickr.checked) {
    key = 'three';
    setBg();
  }
});

//перезагрузка или закрытие страницы
function setLocalStorage() {
  localStorage.setItem('keySource', key);
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('keySource')) {
    key = localStorage.getItem('keySource');
  }
  const currentSource = document.querySelector(`.${key}`);
  currentSource.setAttribute("checked", "");
};
window.addEventListener('load', getLocalStorage);
