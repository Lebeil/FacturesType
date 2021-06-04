export class Storage {
    static checkLocalStorage() {
        if (localStorage.getItem('invoice') === null) {
            localStorage.setItem('invoice', '[]');
        }
        if (localStorage.getItem('estimate') === null) {
            localStorage.setItem('estimate', '[]');
        }
    }
}
