const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}


const showInputError = (form, input, errorMessage, settings) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.add(settings.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(settings.errorClass);
};

const hideInputError = (form, input, settings) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.remove(settings.inputErrorClass);
  error.textContent = "";
  error.classList.remove(settings.errorClass);
};

const toggleInputError = (form, input, settings) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, settings);
  } else {
    hideInputError(form, input, settings);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleSubmitButton = (inputs, button, settings) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false;
  }
};

const setEventListeners = (form, settings) => {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  const button = form.querySelector(settings.submitButtonSelector);
  toggleSubmitButton(inputs, button, settings);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      toggleInputError(form, input, settings);
      toggleSubmitButton(inputs, button, settings);
    });
  });
};

const enableValidation = (settings) => { 
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(form, settings);
  });
};

enableValidation(validationConfig);


