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


function renderSaving(isSaved, form) {
  if (!isSaved) {
    form.querySelector(".popup__save").textContent = "Saving...";
  } else {
    if(form != document.querySelector('.popup_new-image')) {
      form.querySelector(".popup__save").textContent = "Save";
    } else {
      form.querySelector(".popup__save").textContent = "Create";
    }
  }
 }