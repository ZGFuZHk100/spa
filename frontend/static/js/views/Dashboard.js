import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
            <h1>Dashboard</h1>
        `;
    }
}