export class Storage {
    constructor(typeVal, htmlString) {
        this.setItem(typeVal, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem('invoice') === null) {
            localStorage.setItem('invoice', '[]');
        }
        if (localStorage.getItem('estimate') === null) {
            localStorage.setItem('estimate', '[]');
        }
    }
    setItem(typeVal, htmlString) {
    }
}
