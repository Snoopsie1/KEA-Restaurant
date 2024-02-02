class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
      <header>
       <h1>Restaurant KEA</h1>
       <nav>
         <ul>
           <li>
             <a href="index.html">Home</a>
           </li>
           <li>
             <a href="menu.html">Menu</a>
           </li>
           <li>
             <a href="contact.html">Contact</a>
           </li>
         </ul>
       </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);