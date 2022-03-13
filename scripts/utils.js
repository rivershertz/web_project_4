import {
  closeByEscape,
  handleProfileFormSave,
  handleImageAddFormCreate,
} from "./index.js";

export {
  initialCards,
  validationConfig,
  imagePopupContainer,
  imageFormContainer,
  profileFormContainer,
  profileName,
  profileAbout,
  editButton,
  addButton,
  imageCreateButton,
  profileCloseButton,
  imageCloseButton,
  inputName,
  inputAbout,
  inputUrl,
  inputTitle,
  popupImageClose,
  popups,
  popupImageImg,
  popupImageTitle,
  openPopup,
  closePopup,
};

const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const imagePopupContainer = document.querySelector(".popup_image-popup");
const imageFormContainer = document.querySelector(".popup_new-image");
const profileFormContainer = document.querySelector(".popup_profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const imageCreateButton = document.querySelector(".popup__save_image");
const profileCloseButton = document.querySelector(".popup__close_profile");
const imageCloseButton = document.querySelector(".popup__close_image");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const inputUrl = document.querySelector(".popup__input_url");
const inputTitle = document.querySelector(".popup__input_title");
const popupImageClose = document.querySelector(".popup__close_image-popup");
const popups = [...document.querySelectorAll(".popup")];
const popupImageImg = document.querySelector(".popup__img_image-popup");
const popupImageTitle = document.querySelector(".popup__title_image-popup");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

profileFormContainer.addEventListener("submit", handleProfileFormSave);
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);
editButton.addEventListener("click", () => openPopup(profileFormContainer));
profileCloseButton.addEventListener("click", () =>
  closePopup(profileFormContainer)
);
addButton.addEventListener("click", () => openPopup(imageFormContainer));
imageCloseButton.addEventListener("click", () =>
  closePopup(imageFormContainer)
);
popupImageClose.addEventListener("click", () =>
  closePopup(imagePopupContainer)
);
