const form = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtn = document.querySelector(".profile__edit");
const saveBtn = document.querySelector(".popup__save");
const closeBtn = document.querySelector(".popup__close");

function handlePopupFormOpen() {
  form.classList.add("popup__opened");
  const inputName = document.querySelector(".popup__name");
  const inputAbout = document.querySelector(".popup__about");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
editBtn.addEventListener("click", handlePopupFormOpen);

function handlePopupFormClose() {
  form.classList.remove("popup__opened");
}
closeBtn.addEventListener("click", handlePopupFormClose);

function handleProfileFormSave(evt) {
  evt.preventDefault();
  const inputName = document.querySelector(".popup__name");
  const inputAbout = document.querySelector(".popup__about");
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  form.classList.remove("popup__opened");
}
saveBtn.addEventListener("click", handleProfileFormSave);
