import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
    const formData = {};
    this._inputs.forEach((input) => {
      formData[input.id] = input.value;
    });
    console.log(formData);
    return formData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputValues());
      this.close();
    });
  }

  close () {
    this._form.reset();
    super.close();
  }
}
