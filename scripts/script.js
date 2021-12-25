const formContainer = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtn = document.querySelector(".profile__edit");
const saveBtn = document.querySelector(".popup__save");
const closeBtn = document.querySelector(".popup__close");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");

function handlePopupFormToggle() {
  formContainer.classList.toggle("popup__opened");
}

function handlePopupFormOpen() {
  handlePopupFormToggle()
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handlePopupFormClose() {
  handlePopupFormToggle()
}

function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handlePopupFormToggle()
}

saveBtn.addEventListener("submit", handleProfileFormSave);
editBtn.addEventListener("click", handlePopupFormOpen);
closeBtn.addEventListener("click", handlePopupFormClose);
