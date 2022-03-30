import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
        this._popupForm = this._popup.querySelector(".popup__form");
    }
    
    _getInputValues() {
        const formData = {};
        this._inputs.forEach((input) => {
            formData[input.id] = input.value;
        })
        console.log(formData)
        return formData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", this._submitFunction(this._getInputValues()));
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}