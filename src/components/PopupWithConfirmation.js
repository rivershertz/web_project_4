import Popup from "./Popup";

export default class  PopupWithConfirmation extends Popup {
  setAction(action) {
    this._handleConfirm = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleConfirm();
      });
  }
}
