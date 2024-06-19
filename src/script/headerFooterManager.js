class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <ul>
                <li><a href="./home.html">Acceuil</a></li>
                <li><a href="#history">Histoire de la casserole</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
            </ul>
        </div>
        `
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>
            © 2024 Copyright - Agius Angelo
        </p>
        `
    }
}

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
