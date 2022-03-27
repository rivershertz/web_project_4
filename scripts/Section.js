// The Section class goal - rendering a list of elements / an element on the page.
// requirements 
// - the constructor takes an object containing an "items" list of cards (initialCards)
// and renderer function (wich will be designed in index.js for each instance individually).
// other than the object it will take a CSS class selector of the container the element
// should be appended to.
// The class will contain a public method 
export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this.renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    };

    renderItems() {
        this._items.forEach((item) => {
            this.renderer(item);
            this.addItem(item)
        });
    };

    addItem(element) {
        this._containerSelector.append(element);
    };
}