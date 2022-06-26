import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
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
import PopupWithDelete from "../components/PopupWithDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "47fa02be-b6a6-415a-ad1a-fb244489b961",
    "Content-Type": "application/json",
  },
});

// api.getLikes()
// .then(console.log)

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({
    profileName: res.name,
    profileAbout: res.about,
  });
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__subtitle",
});

const imageModal = new PopupWithImage(".popup_image-popup");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile", (formData) => {
  api.setUserInfo(formData.profileName, formData.profileAbout);
  userInfo.setUserInfo(formData);
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_new-image", (formData) => {
  const card = generateCard({
    name: formData.title,
    link: formData.link,
  });
  cardsSection.addItem(card.generateCard());
  api.createCard(formData.title, formData.link);
});
addCardModal.setEventListeners();

const confirmDeleteModal = new PopupWithDelete(".popup_delete");
confirmDeleteModal.setEventListeners();

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

const generateCard = (data) => {
  const newCard = new Card(
    data,
    "#template",
    (name, link) => {
      imageModal.open(name, link);
    },
    (id) => {
      confirmDeleteModal.open();
      confirmDeleteModal.setAction(() => {
        api.deleteCard(id);
        newCard.removeCard();
      });
    }
  );
  return newCard;
};

const renderCard = (data, photosContainer) => {
  const card = generateCard(data);
  photosContainer.prepend(card.generateCard());
};

const cardsSection = new Section(
  {
    renderer: (formData) => {
      renderCard(
        { name: formData.name, link: formData.link, id: formData._id },
        photosList
      );
    },
  },
  ".photos__list"
);
api.getInitialCards().then((res) => {
  cardsSection.renderItems(res);
});
