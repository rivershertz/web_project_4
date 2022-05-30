import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards, validationConfig } from "../components/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const imageModal = new PopupWithImage(".popup_image-popup");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile", (formData) => {
  userInfo.setUserInfo(formData);
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_new-image", (formData) => {
  renderCard({
    text: formData.title,
    link: formData.link,
  }, photosList);
});
addCardModal.setEventListeners();

const userInfo = new UserInfo ({
  nameSelector: '.profile__name', 
  aboutSelector:'.profile__subtitle'
})

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

const cardTemplateSelector = cocument.querySelector("#template");
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
const imageLink = document.querySelector(".popup__input_url");
const imageTitle = document.querySelector(".popup__input_title");
const popupImageClose = document.querySelector(".popup__close_image-popup");
const popups = [...document.querySelectorAll(".popup")];
const popupImageImg = document.querySelector(".popup__img_image-popup");
const popupImageTitle = document.querySelector(".popup__title_image-popup");
const photosList = document.querySelector(".photos__list");
const newImageForm = imageFormContainer.querySelector(".popup__form");

// function handleProfileFormSave(evt) {
//   const userInfoUpdate = new UserInfo({
//     nameSelector: inputName.value,
//     aboutSelector: inputAbout.value,
//   });
//   const userProfileUpdate = userInfoUpdate.getUserInfo();
//   profileName.textContent = userProfileUpdate.name;
//   profileAbout.textContent = userProfileUpdate.about;
// }

// function handleImageAddFormCreate(evt) {
//   // const cardData = {
//   //   name: inputTitle.value,
//   //   link: inputUrl.value,
//   // };
//   newImageForm.reset();
//   addImageFormValidator.toggleSubmitButton();
//   // renderCard(cardData);
// }

const fillProfileForm = () => {
  const userProfileInfo = userInfo.getUserInfo();
  inputName.value = userProfileInfo.name;
  inputAbout.value = userProfileInfo.about;
};

profileFormContainer.addEventListener("submit", (evt) => {
  handleProfileFormSave(evt);
});
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);

editButton.addEventListener("click", () => {
  profileFormValidator.toggleSubmitButton();
  fillProfileForm();
  editModal.open();
});

addButton.addEventListener("click", () => {
  addImageFormValidator.toggleSubmitButton();
  addCardModal.open();
});

const renderCard = (data, photosList) => {
  const card = new Card(data, cardTemplateSelector, (text, link) => {
    imageModal.open(text, link);
  });
  photosList.prepend(card.cardTemplateSelector());
};

const addImageFormValidator = new FormValidator(
  validationConfig,
  imageFormContainer
);

const profileFormValidator = new FormValidator(
  validationConfig,
  profileFormContainer
);

addImageFormValidator.enableValidation();

profileFormValidator.enableValidation();

const addInitialCards = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const cardElement = new Card(card, "#card-template", () => {
        const handleCardClick = new PopupWithImage(imagePopupContainer, card);
        handleCardClick.open();
      });
      const newCard = cardElement.generateCard();
      addInitialCards.addItem(newCard);
    },
  },
  photosList
);
addInitialCards.renderItems();