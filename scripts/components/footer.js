class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
    <footer>
      <p>&copy; 2023 KEA Development</p>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);