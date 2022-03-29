import { imagePopupContainer, popupImageImg, popupImageTitle } from "../page/index.js";
import { openPopup } from "./utils.js";

export default class Card {
  constructor(data, templateSelector) {
    this._text = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photos__card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".photos__img");
    imageElement.src = this._link;
    this._element.querySelector(".photos__title").textContent = this._text;
    imageElement.alt = `picture of ${this._text}`;
    this._setEventListeners();
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
