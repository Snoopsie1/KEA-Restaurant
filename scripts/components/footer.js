class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
      <p>&copy; 2023 KEA Development</p>
    `;
  }
}

customElements.define('footer-component', Footer);