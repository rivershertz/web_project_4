export default class FormValidator {
  constructor(settings, form) {
    this._currentForm = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputs = Array.from(this._currentForm.querySelectorAll(this._inputSelector));
    this._submitButton = this._currentForm.querySelector(this._submitButtonSelector);
  }

  resetValidation() {
    this._inputs.forEach(input => {
      this._hideInputError(input)
    })
  }

  _showInputError(input, errorMessage) {
    const error = this._currentForm.querySelector(`.${input.id}-input-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const error = this._currentForm.querySelector(`.${input.id}-input-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = "";
    error.classList.remove(this._errorClass);
  }

  _toggleInputError(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => { 
      return !input.validity.valid; 
    }); 
  }

  toggleSubmitButton() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleInputError(input);
        this.toggleSubmitButton();
      });
    });
  }

  enableValidation() {
    this._currentForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
