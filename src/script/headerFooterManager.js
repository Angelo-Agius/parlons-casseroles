class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <ul>
                <li><a href="./home.html">Accueil</a></li>
                <li><a href="#history">Histoire de la casserole</a></li>
                <li><a href="./home.html#metherials">Les matheriaux des casseroles</a></li>
                <li><a href="./home.html#size">Les tailles des casseroles</a></li>
            </ul>
        </div>
        `
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h6>
            © 2024 Copyright - Agius Angelo <br>
            Powered by <a href="https://github.com" target="_blank">GitHub</a>
        </h6>
        `
    }
}

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
