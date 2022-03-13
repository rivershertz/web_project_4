import { createNewCard } from "./Card.js";

const imageFormContainer = document.querySelector(".popup_new-image");
const profileFormContainer = document.querySelector(".popup_profile");
export const imagePopupContainer = document.querySelector(".popup_image-popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const imageCreateButton = document.querySelector(".popup__save_image");
const profileCloseButton = document.querySelector(".popup__close_profile");
const imageCloseButton = document.querySelector(".popup__close_image");

const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const inputUrl = document.querySelector(".popup__input_url");
const inputTitle = document.querySelector(".popup__input_title");

export const popupImageImg = imagePopupContainer.querySelector(
  ".popup__img_image-popup"
);
export const popupImageTitle = document.querySelector(".popup__title_image-popup");
const popupImageClose = document.querySelector(".popup__close_image-popup");
const popups = [...document.querySelectorAll(".popup")];


function closeByEscape(evt) {
  if (evt.code == "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(profileFormContainer);
}

function handleImageAddFormCreate(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputTitle.value,
    link: inputUrl.value,
  }
  createNewCard(cardData);
  closePopup(imageFormContainer);
  document.querySelector(".reset").reset();
  imageCreateButton.disabled = true;
  imageCreateButton.classList.add("popup__save_disabled");
}

const closePopupWithClick = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      };
    });
  });
};
closePopupWithClick(popups);

profileFormContainer.addEventListener("submit", handleProfileFormSave);
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);
editButton.addEventListener("click", () => openPopup(profileFormContainer));
profileCloseButton.addEventListener("click", () =>
  closePopup(profileFormContainer)
);
addButton.addEventListener("click", () => openPopup(imageFormContainer));
imageCloseButton.addEventListener("click", () =>
  closePopup(imageFormContainer)
);
popupImageClose.addEventListener("click", () =>
  closePopup(imagePopupContainer)
);