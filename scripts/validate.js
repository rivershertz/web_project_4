const globalOptions = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}

const showInputError = (form, input, errorMessage) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.add(globalOptions.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(globalOptions.errorClass);
};

const hideInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.remove(globalOptions.inputErrorClass);
  error.textContent = "";
  error.classList.remove(globalOptions.errorClass);
};

const toggleInputError = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleSubmitButton = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(globalOptions.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(globalOptions.inactiveButtonClass);
    button.disabled = false;
  }
};

const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll(globalOptions.inputSelector));
  const button = form.querySelector(globalOptions.submitButtonSelector);
  toggleSubmitButton(inputs, button);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      toggleInputError(form, input);
      toggleSubmitButton(inputs, button);
    });
  });
};

const enableValidation = (settings) => { 
  const {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  } = settings || {};

  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(form);
  });
};

enableValidation(globalOptions);


