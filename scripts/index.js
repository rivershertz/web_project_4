import createNewCard from "./Card.js";
import initFormValidation from "./FormValidator.js";

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
  closePopup,
} from "./utils.js";

export function closeByEscape(evt) {
  if (evt.code == "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

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
      }
    });
  });
};

initialCards.forEach((card) => {
  createNewCard(card);
});
closePopupWithClick(popups);
initFormValidation(validationConfig, profileFormContainer);
initFormValidation(validationConfig, imageFormContainer);
