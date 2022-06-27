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
  profileAvatar,
  profilePicFormContainer
} from "../components/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

let userId;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "47fa02be-b6a6-415a-ad1a-fb244489b961",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([userData, cardData]) => {
    userId = userData._id;
    cardsSection.renderItems(cardData);
    userInfo.setUserInfo(userData);
    userInfo.setUserPic(userData.avatar)
  }
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__subtitle",
  avatarSelector: '.profile__pic'
});

const imageModal = new PopupWithImage(".popup_image-popup");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile", (formData) => {
  api.setUserInfo(formData.profileName, formData.profileAbout).then((res) => {
    userInfo.setUserInfo(res);
  });
});
editModal.setEventListeners();

const editPictureModal = new PopupWithForm('.popup_edit-pic', (formData) => {
  api.setUserAvatar(formData.link)
  .then((res) => {
    userInfo.setUserPic(res.avatar)
  })
});
editPictureModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_new-image", (formData) => {
  api.createCard(formData).then((res) => {
    const card = generateCard(res);
    cardsSection.addItem(card.generateCard());
  });
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
profileAvatar.addEventListener("click", () => {
  profilwPicFormValidator.toggleSubmitButton();
  profilwPicFormValidator.resetValidation();
  editPictureModal.open();
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

const profilwPicFormValidator = new FormValidator(
  validationConfig,
  profilePicFormContainer
);
profilwPicFormValidator.enableValidation();

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
        newCard.removeCard();
        api.deleteCard(id);
      });
    },
    (id) => {
      const likeStatus = newCard.isLiked();
      if (!likeStatus) {
        api.addLike(id).then((res) => {
          newCard.likeCard(res.likes);
        });
      } else {
        api.removeLike(id).then((res) => {
          newCard.dislikeCard(res.likes)
        })
      }
    },
    userId
  );
  return newCard;
};
const renderCard = (data, photosContainer) => {
  const card = generateCard(data);
  photosContainer.prepend(card.generateCard());
};

const cardsSection = new Section(
  {
    renderer: (data) => {
      renderCard(data, photosList);
    },
  },
  ".photos__list"
);
