import { openedPopup, imageFormContainer, addImageFormValidator, profileFormValidator, profileFormContainer, inputName, profileName, inputAbout, profileAbout } from "./index.js";

export { closePopup, closeByEscape, openPopup, addRemoteClickListeners };

function closeByEscape(evt) {
  if (evt.code == "Escape") {
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add(openedPopup);
  document.addEventListener("keydown", closeByEscape);
  if ((popup = imageFormContainer)) {
    addImageFormValidator._toggleSubmitButton();
  }
  if ((popup = profileFormContainer)) {
    profileFormValidator._toggleSubmitButton();
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  }
}

function closePopup(popup) {
  popup.classList.remove(openedPopup);
  document.removeEventListener("keydown", closeByEscape);
}

const addRemoteClickListeners = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      }
    });
  });
};
