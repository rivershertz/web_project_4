import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(name, link) {
    const url = this._popup.querySelector('.popup__img_image-popup');
    const caption = this._popup.querySelector('.popup__title_image-popup');

    url.src = link;
    url.alt = `picture of ${name}`;
    caption.textContent = name;
    
    super.open();
  }
}