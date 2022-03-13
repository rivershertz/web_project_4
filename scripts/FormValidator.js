class FormValidator {
  constructor(settings, form) {
    this._currentForm = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _showInputError(form, input, errorMessage) {
    const error = form.querySelector(`.${input.id}-input-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._errorClass);
  }

  _hideInputError(form, input) {
    const error = form.querySelector(`.${input.id}-input-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = "";
    error.classList.remove(this._errorClass);
  }

  _toggleInputError(form, input) {
    if (!input.validity.valid) {
      this._showInputError(form, input, input.validationMessage);
    } else {
      this._hideInputError(form, input);
    }
  }

  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleSubmitButton(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    }
  }

  _setEventListeners(form) {
    const inputs = Array.from(form.querySelectorAll(this._inputSelector));
    const button = form.querySelector(this._submitButtonSelector);
    this._toggleSubmitButton(inputs, button);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleInputError(form, input);
        this._toggleSubmitButton(inputs, button);
      });
    });
  }

  enableValidation() {
    this._currentForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this._currentForm);
  }
}

export default function initFormValidation(settings, form) {
  new FormValidator(settings, form).enableValidation();
}
