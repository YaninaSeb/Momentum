const settingBtn = document.querySelector('.setting-button');
const settingContainer = document.querySelector('.setting-container-none');

settingBtn.addEventListener("click", () => {
  settingContainer.classList.toggle("setting-container");
  settingContainer.classList.toggle("setting-container-none");
}, false);
