export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._about.textContent = userData.about;
    }

    setUserPic(link) {
        this._avatar.src = link
    }
}