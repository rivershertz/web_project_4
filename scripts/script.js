let form = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__subtitle");
let editBtn = document.querySelector(".profile__edit");
let saveBtn = document.querySelector(".popup__save");
let closeBtn = document.querySelector(".popup__close");

function handlePopupFormOpen() {
    form.classList.add("popup__opened");
    let inputName = document.querySelector(".popup__name");
    let inputAbout = document.querySelector(".popup__about");
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
    let inputName = document.querySelector(".popup__name");
    let inputAbout = document.querySelector(".popup__about");
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    form.classList.remove("popup__opened");
}
saveBtn.addEventListener("click", handleProfileFormSave);
