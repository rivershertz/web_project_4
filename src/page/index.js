import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  initialCards,
  validationConfig,
  imageFormContainer,
  editButton,
  addButton,
  photosList,
  profileFormContainer,
  inputName,
  inputAbout,
} from "../components/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__subtitle",
});

const imageModal = new PopupWithImage(".popup_image-popup");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile", (formData) => {
  console.log(formData)
  userInfo.setUserInfo(formData);
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_new-image", (formData) => {
  const card = generateCard({
    name: formData.title,
    link: formData.link,
  });
  cardsSection.addItem(card.generateCard());
});
addCardModal.setEventListeners();



const fillProfileForm = () => {
  const userProfileInfo = userInfo.getUserInfo();
  inputName.value = userProfileInfo.name;
  inputAbout.value = userProfileInfo.about;
};

editButton.addEventListener("click", () => {
  profileFormValidator.toggleSubmitButton();
  profileFormValidator.resetValidation();
  fillProfileForm();
  editModal.open();
});

addButton.addEventListener("click", () => {
  addImageFormValidator.toggleSubmitButton();
  addImageFormValidator.resetValidation();
  addCardModal.open();
});

const generateCard = (data) => {
  return new Card(data, "#template", (name, link) => {
    imageModal.open(name, link);
  });
};

const renderCard = (data, photosContainer) => {
  const card = generateCard(data);
  photosContainer.prepend(card.generateCard());
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

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      renderCard({ name: cardData.name, link: cardData.link }, photosList);
    }
  },
  ".photos__list"
);
cardsSection.renderItems();
