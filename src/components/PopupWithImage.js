import Popup from "./Popup";
import {popupImageImg, popupImageTitle} from "../page/index.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._data = data;
  }

  open() {
    popupImageImg.src = data.link;
    popupImageImg.alt = `picture of ${data.name}`;
    popupImageTitle.textContent = data.name;
  }
}