export {
  validationConfig,
  imagePopupContainer,
  popupImageImg,
  popupImageTitle,
  imageFormContainer,
  editButton,
  addButton,
  profileFormContainer,
  inputName,
  inputAbout,
  profileName,
  profileAbout,
  photosList,
  profileAvatar,
  profilePicFormContainer,
  deleteFormContainer
};

const imagePopupContainer = document.querySelector(".popup_image-popup");
const imageFormContainer = document.querySelector(".popup_new-image");
const profilePicFormContainer = document.querySelector(".popup_edit-pic");
const profileFormContainer = document.querySelector(".popup_profile");
const deleteFormContainer = document.querySelector(".popup_delete");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const popupImageImg = document.querySelector(".popup__img_image-popup");
const popupImageTitle = document.querySelector(".popup__title_image-popup");
const photosList = document.querySelector(".photos__list");
const profileAvatar = document.querySelector(".profile__pic");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};