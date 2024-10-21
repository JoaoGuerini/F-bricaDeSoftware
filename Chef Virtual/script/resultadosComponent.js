class ResultadosComponent extends HTMLElement {
    constructor(){
        super()
    }

    connectedCallback() {
        this.innerHTML = 
        `<link rel="stylesheet" href="./css/header.css">
        
        <header>
            <div class="header-img-logo">
                <img src="./assets/img/logo2.png" alt="logo-chef-virtual">
            </div>

            <ul>
                <li><a href="index.html">INÍCIO</a></li>
                <li><a href="publiReceitas.html">PUBLICAR</a></li>
            </ul>

            <div class="header-div-search">
                <input type="text" placeholder="O que vamos comer hoje?" class="header-search-input">
                <button class="header-search-button">
                    <img src="./assets/img/search-icon.webp" alt="Buscar" class="header-search-icon">
                </button>
            </div>

            <div class="header-div-end">
                <img src="./assets/img/icon-perfil.png" alt="">
                <a href="login.html" class="header-go-login-button">Login</a>
            </div>
        </header>    
        `
    }
}
 



customElements.define("header-component", ResultadosComponent)