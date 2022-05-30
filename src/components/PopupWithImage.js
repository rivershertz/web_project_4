import Popup from "./Popup";
import {popupImageImg, popupImageTitle} from "../page/index.js"

export default class PopupWithImage extends Popup {
  open(text, link) {
    const link = this._popup.querySelector('.popup__img_image-popup');
    const caption = this._popup.querySelector('.popup__title_image-popup');

    link.src = link;
    link.alt = `picture of ${text}`;
    caption.textContent = text;
    
    super.open();
  }
}