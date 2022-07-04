export { reaquringRequest, closeByEscape, addRemoteClickListeners, renderSaving };

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

const reaquringRequest = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))


function renderSaving(isSaved, form, buttonText) {
  const button = form.querySelector(".popup__save")
  button.textContent = isSaved ? buttonText : "Saving..."
  }