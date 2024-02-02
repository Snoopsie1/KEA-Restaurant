class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    const hostname = window.location.hostname.includes('github.io') ? '/KEA-Restaurant/' : '/';
    this.innerHTML = `
      <header>
       <h1>Restaurant KEA</h1>
       <nav>
         <ul>
           <li>
             <a href="${hostname}">Home</a>
           </li>
           <li>
             <a href="${hostname}views/menu.html">Menu</a>
           </li>
           <li>
             <a href="${hostname}views/contact.html">Contact</a>
           </li>
         </ul>
       </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);