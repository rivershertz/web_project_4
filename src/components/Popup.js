export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupCloseButton = this._popup.querySelector(".popup__close");
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        this.close();
      }
    });
  }
}
