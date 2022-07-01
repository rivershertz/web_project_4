import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._handleSubmit = submitFunction;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
    const formData = {};
    inputs.forEach((input) => {
      formData[input.id] = input.value;
    });
    return formData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }
}
