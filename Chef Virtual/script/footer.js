class Footer extends HTMLElement {
    constructor(){
        super()
    }

    connectedCallback() {
        this.innerHTML = 
        `<link rel="stylesheet" href="css/footer.css">
        <footer>
        <div class="footerNav">
            <ul>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Contato</a></li>
            </ul>
            </div>
        </footer>`
    }
}



customElements.define("footer-component", Footer)