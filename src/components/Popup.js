export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close () {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", this.close)
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        this.close();
      }
    });
  }
}
