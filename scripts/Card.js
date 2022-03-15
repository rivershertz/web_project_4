import { imagePopupContainer, popupImageImg, popupImageTitle } from "./utils.js";
import { openPopup } from "./index.js";

export default class Card {
  constructor(data, cardSelector) {
    this._text = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photos__card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".photos__img");
    this._setEventListeners();
    imageElement.src = this._link;
    this._element.querySelector(".photos__title").textContent = this._text;
    imageElement.alt = `picture of ${this._text}`;
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".photos__like")
      .addEventListener("click", this._toggleLikeButton);
    this._element
      .querySelector(".photos__remove")
      .addEventListener("click", this._removeCard);
    this._element
      .querySelector(".photos__img")
      .addEventListener("click", this._openImgPopup);
  }

  _toggleLikeButton = () => {
    this._element
      .querySelector(".photos__like")
      .classList.toggle("photos__like_active");
  }

  _removeCard = () => {
    this._element.remove();
    this._element = null;
  }

  _openImgPopup = () => {
    popupImageImg.src = this._link;
    popupImageImg.alt = `picture of ${this._text}`;
    popupImageTitle.textContent = this._text;
    openPopup(imagePopupContainer);
  };
};
