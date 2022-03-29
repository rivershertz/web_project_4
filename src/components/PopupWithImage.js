import Popup from "./Popup";
import {popupImageImg, popupImageTitle} from "../page/index.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._data = data;
  }

  open() {
    popupImageImg.src = this._data.link;
    popupImageImg.alt = `picture of ${this._data.name}`;
    popupImageTitle.textContent = this._data.name;
    this._popup.classList.add("popup_opened");
    super.setEventListeners();
  }
}