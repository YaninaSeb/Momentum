import playList from './playList.js';

const btnPlay = document.querySelector('.play')
let isPlay = false;

/*создание плейлиста */

for(let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  const playListContainer = document.querySelector('.play-list');
  playListContainer.append(li)
}

let playNum=0;

/*проигрывание плейлиста*/

const audio = new Audio();

function playAudio() {
  audio.src = playList[playNum].src
  if (!isPlay) {
    audio.play();
    isPlay = true;
    changeColor();
    customPlayer()
  } else if (isPlay) {
    audio.pause();
    isPlay = false; 
  }
}

function changeBtn() {
  if (!isPlay) { 
    btnPlay.classList.remove('pause');
    btnPlay.classList.add('play');
  } else if (isPlay) {
    btnPlay.classList.add('pause');
    audio.classList.remove('play');
  }
}

btnPlay.addEventListener('click', () => {
  playAudio(),
  changeBtn()
});

audio.addEventListener('ended', playNext);

/*пролистывание треков */

const btnPlayPrev = document.querySelector('.play-prev');
const btnPlayNext = document.querySelector('.play-next');

function playNext(){
  playNum = playNum == 3 ? 0 : playNum+1;
  isPlay = false;
  playAudio();
  changeBtn();
}

function playPrev() {
  playNum = playNum == 0 ? 3 : playNum-1;
  isPlay=false;
  playAudio();
  changeBtn();
}

btnPlayPrev.addEventListener('click' , playPrev);
btnPlayNext.addEventListener('click' , playNext);

function changeColor() {
  for(let i = 1; i < playList.length+1; i++) {
    const li = document.querySelector(`li:nth-of-type(${i})`);
    if (li.classList.contains('item-active')) {
      li.classList.remove('item-active');
    }
  }
  const liActive = document.querySelector(`li:nth-of-type(${playNum+1})`);
  liActive.classList.add('item-active');
}

/*КАСТОМНЫЙ АУДИОПЛЕЕР */

function customPlayer() {
  const nameCustom = document.querySelector('.name-custom-player');
  nameCustom.textContent = playList[playNum].title;   

  const lengthSong = document.querySelector('.length');
  lengthSong.textContent = playList[playNum].duration; 

  audio.volume = .75;

  setInterval(() => {
    const progressBar = document.querySelector("input");
    progressBar.value = audio.currentTime / audio.duration * 100;
    const currentTime = document.querySelector('.current');
    currentTime.textContent = getTimeCodeFromNum(audio.currentTime);
  }, 50);
}

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

//щелкаем по шкале времени, чтобы пропустить
const timeline = document.querySelector(".progress");

timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//щелкаем ползунок громкости, чтобы изменить громкость
const volumeSlider = document.querySelector(".volume-percentage");
volumeSlider.addEventListener('click', e => {
  const newVolume = volumeSlider.value/100;
  audio.volume = newVolume;
}, false)

//меняем иконку громкости
const btnVolum = document.querySelector(".volume-button");
const volumeValue = document.querySelector(".volume-percentage");
const value = volumeValue.value;
const audioVolume = audio.volume;

btnVolum.addEventListener("click", changeBtnVolume);

function changeBtnVolume() {
  btnVolum.classList.toggle("volume-button-off");
  btnVolum.classList.toggle("volume-button");
  if (btnVolum.classList.contains("volume-button")) {
    const volumePersentage = document.querySelector(".volume-percentage");
    audio.volume = audioVolume;
    volumePersentage.value = value;  
  } else if (btnVolum.classList.contains("volume-button-off")) {
    const volumePersentage = document.querySelector(".volume-percentage");
    volumePersentage.value = 0;
    audio.volume = 0;
  }
}

volumeValue.addEventListener("click", () => {
  if (volumeValue.value == 0) {
    changeBtnVolume()
  }
  if (volumeValue.value > 0) {
    btnVolum.classList.remove("volume-button-off");
    btnVolum.classList.add("volume-button");
  }
}, false);
