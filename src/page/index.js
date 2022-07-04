import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import { renderSaving } from "../utils/utils.js";
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
  profilePicFormContainer,
  deleteFormContainer,
} from "../utils/constants.js";

let userId;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "47fa02be-b6a6-415a-ad1a-fb244489b961",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    cardsSection.renderItems(cardData);
    userInfo.setUserInfo(userData);
    userInfo.setUserPic(userData.avatar);
  })
  .catch(console.log);

const addImageFormValidator = new FormValidator(
  validationConfig,
  imageFormContainer
);
addImageFormValidator.enableValidation();

const profileFormValidator = new FormValidator(
  validationConfig,
  profileFormContainer
);
profileFormValidator.enableValidation();

const profilePicFormValidator = new FormValidator(
  validationConfig,
  profilePicFormContainer
);
profilePicFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__subtitle",
  avatarSelector: ".profile__pic",
});

const imageModal = new PopupWithImage(".popup_image-popup");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile", (formData) => {
  renderSaving(false, profileFormContainer);
  api
    .setUserInfo(formData.profileName, formData.profileAbout)
    .then((res) => {
      userInfo.setUserInfo(res);
      editModal.close();
      profileFormContainer.querySelector(".popup__form").reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderSaving(true, profileFormContainer, 'Save');
    });
});
editModal.setEventListeners();

const editPictureModal = new PopupWithForm(".popup_edit-pic", (formData) => {
  renderSaving(false, profilePicFormContainer);
  api
    .setUserAvatar(formData.editLink)
    .then((res) => {
      userInfo.setUserPic(res.avatar);
      editPictureModal.close();
      profilePicFormContainer.querySelector(".popup__form").reset();
    })
    .catch(console.log)
    .finally(() => {
      renderSaving(true, profilePicFormContainer, 'Save');
    });
});
editPictureModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_new-image", (formData) => {
  renderSaving(false, imageFormContainer);
  api
    .createCard(formData)
    .then((res) => {
      const card = generateCard(res);
      cardsSection.addItem(card.generateCard());
      addCardModal.close();
      imageFormContainer.querySelector(".popup__form").reset();
    })
    .catch(console.log)
    .finally(() => {
      renderSaving(true, imageFormContainer, 'Create');
    });
});
addCardModal.setEventListeners();

const confirmDeleteModal = new PopupWithConfirmation(".popup_delete");
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
  addImageFormValidator.resetValidation();
  addImageFormValidator.toggleSubmitButton();
  addCardModal.open();
});
profileAvatar.addEventListener("click", () => {
  profilePicFormValidator.toggleSubmitButton();
  profilePicFormValidator.resetValidation();
  editPictureModal.open();
});

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
        renderSaving(false, deleteFormContainer);
        api
          .deleteCard(id)
          .then((res) => {
            newCard.removeCard();
            confirmDeleteModal.close();
          })
          .catch(console.log)
          .finally(() => {
            renderSaving(true, deleteFormContainer, 'Yes');
          });
      });
    },
    (card) => {
      if (!card.isLiked()) {
        api
          .addLike(card._id)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch(console.log);
      } else {
        api
          .removeLike(card._id)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch(console.log);
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
