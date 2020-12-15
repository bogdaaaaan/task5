import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Напитки');
    }

    async getHtml() {
        let response = await fetch('../js/views/drinks.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
       
    }
}