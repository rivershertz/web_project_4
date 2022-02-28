const showInputError = (form, input, errorMessage) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.add("popup__input_type_error");
  error.textContent = errorMessage;
  error.classList.add("popup__error_visible");
}

const hideInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-input-error`);
  input.classList.remove("popup__input_type_error");
  input.classList.remove("popup__input_type_error");
  error.textContent = "";
  error.classList.remove("popup__error_visible");
}

const isValid = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  };
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleSubmitButton = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add("popup__button_disabled");
    button.disabled = true;
  } else {
    button.classList.remove("popup__button_disabled");
    button.disabled = false;
  }
};

const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll(".popup__input"));
  const button = form.querySelector(".popup__save");
  toggleSubmitButton(inputs, button);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      isValid(form, input);
      toggleSubmitButton(inputs, button);
    });
  });
};

const enableValidation = (settings) => {

  const forms = Array.from(document.querySelectorAll(".popup__form"));
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {e.preventDefault()});
    setEventListeners(form);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

