import Popup from "./Popup";

export default class  PopupWithConfirmation extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitHandler();
        this.close()
      });
  }
}
