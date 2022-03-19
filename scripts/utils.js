import { openedPopup, imageFormContainer, addImageFormValidator, profileFormValidator, profileFormContainer, inputName, profileName, inputAbout, profileAbout } from "./index.js";

export { closePopup, closeByEscape, openPopup, addRemoteClickListeners };

function closeByEscape(evt) {
  if (evt.code == "Escape") {
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
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
