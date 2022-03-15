import FormValidator from "./FormValidator.js";
import Card from "./Card.js"

import {
  initialCards,
  validationConfig,
  imageFormContainer,
  profileFormContainer,
  profileName,
  profileAbout,
  imageCreateButton,
  inputName,
  inputAbout,
  inputUrl,
  inputTitle,
  popups,
  photosList,
  closeByEscape,
} from "./utils.js";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  imageCreateButton.classList.add("popup__save_disabled");
  imageCreateButton.disabled = true;
  if (popup = ".popup_profile") {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  };
};

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
};

export function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(profileFormContainer);
}

export function handleImageAddFormCreate(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputTitle.value,
    link: inputUrl.value,
  };
  renderCard(cardData);
  closePopup(imageFormContainer);
  document.querySelector(".reset").reset();
}


const closePopupWithClick = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      }
    });
  });
};

function renderCard(card) {
  const cardElement = new Card(card, "#card-template");
  const newCard = cardElement.generateCard();
  photosList.prepend(newCard);
}


initialCards.forEach((card) => {
  renderCard(card);
});
closePopupWithClick(popups);

const profileFormValidator = new FormValidator(validationConfig, profileFormContainer);
profileFormValidator.enableValidation();
const addImageFormValidator = new FormValidator(validationConfig, imageFormContainer);
addImageFormValidator.enableValidation();