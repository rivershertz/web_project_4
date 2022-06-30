export { closePopup, closeByEscape, openPopup, addRemoteClickListeners, renderSaving, Api };

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  document.removeEventListener("keydown", closeByEscape);
  popup.classList.remove("popup_opened");
}

const closeByEscape = (evt) => {
  if (evt.code === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

const addRemoteClickListeners = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      }
    });
  });
};

const reaquringRequest = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);

function renderSaving(isSaved, form) {
  if (!isSaved) {
    isSaved = true;
    form.querySelector(".popup__save").textContent = "Saving...";
    return;
  }
  if (isSaved) {
    form.querySelector(".popup__save").textContent = "Save";
  }
}

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return reaquringRequest(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return reaquringRequest(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo(name, about) {
    return reaquringRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  setUserAvatar(link) {
    return reaquringRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    });
  }

  createCard({ imageName, link }) {
    return reaquringRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: imageName,
        link: link,
      }),
    });
  }

  getLikes(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
    });
  }

  deleteCard(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addLike(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  removeLike(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}
