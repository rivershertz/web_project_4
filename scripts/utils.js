import {
  imageFormContainer,
  profileFormContainer,
} from "./index.js";

export { closePopup, closeByEscape, openPopup, addRemoteClickListeners };



function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

const closeByEscape = (evt) => {
  if (evt.code === "Escape") {
    closePopup(imageFormContainer);
    closePopup(profileFormContainer);
  }
};

const addRemoteClickListeners = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      }
    });
  });
};
