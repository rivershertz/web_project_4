import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards, validationConfig } from "../components/constants.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";


export {
  imagePopupContainer,
  popupImageImg,
  popupImageTitle,
  imageFormContainer,
  addImageFormValidator,
  profileFormValidator,
  profileFormContainer,
  inputName,
  inputAbout,
  profileName,
  profileAbout,
};

const imagePopupContainer = document.querySelector(".popup_image-popup");
const imageFormContainer = document.querySelector(".popup_new-image");
const profileFormContainer = document.querySelector(".popup_profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
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
const photosList = document.querySelector(".photos__list");
const newImageForm = imageFormContainer.querySelector(".popup__form");

const test = new PopupWithForm(imageFormContainer, () => {});


function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  profileFormHandler.close();
}

function handleImageAddFormCreate(evt) {
  evt.preventDefault();
  // const cardData = {
  //   name: inputTitle.value,
  //   link: inputUrl.value,
  // };
  newImageForm.reset();
  addImageFormValidator.toggleSubmitButton();
  // renderCard(cardData);
  addImageFormHandler.close();
}

const fillProfileForm = () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

profileFormContainer.addEventListener("submit", handleProfileFormSave);

imageFormContainer.addEventListener("submit", handleImageAddFormCreate);

editButton.addEventListener("click", () => {
  profileFormValidator.toggleSubmitButton();
  fillProfileForm();
  profileFormHandler.open();
});

addButton.addEventListener("click", () => {
  addImageFormValidator.toggleSubmitButton();
  addImageFormHandler.open();
});

const addImageFormValidator = new FormValidator(
  validationConfig,
  imageFormContainer
);

const profileFormValidator = new FormValidator(
  validationConfig,
  profileFormContainer
);

const profileFormHandler = new PopupWithForm (profileFormContainer, () => {
  const addCard = new Section ({
    items: 
    renderer: (card) => {
      const cardElement = new Card(card, "#card-template", () => {
        const handleCardClick = new PopupWithImage(imagePopupContainer, card)
        handleCardClick.open();
      });
      const newCard = cardElement.generateCard();
      addCard.addItem(newCard);
    }
  })
});
profileFormHandler.setEventListeners();

const addImageFormHandler = new PopupWithForm (imageFormContainer, () => {});
addImageFormHandler.setEventListeners();


addImageFormValidator.enableValidation();

profileFormValidator.enableValidation();

const addInitialCards = new Section({
    items: initialCards,
    renderer: (card) => {
      const cardElement = new Card(card, "#card-template", () => {
        const handleCardClick = new PopupWithImage(imagePopupContainer, card)
        handleCardClick.open();
      });
      const newCard = cardElement.generateCard();
      addInitialCards.addItem(newCard);
    },
  },
  photosList
);
addInitialCards.renderItems();


