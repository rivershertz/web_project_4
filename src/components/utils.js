export { closePopup, closeByEscape, openPopup, addRemoteClickListeners };

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  document.removeEventListener("keydown", closeByEscape);
  popup.classList.remove("popup_opened");
}

const closeByEscape = (evt) => {
  if (evt.code === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
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

