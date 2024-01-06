import style from './header.css' assert { type: 'css' }

class Header extends HTMLElement {
  constructor() {
    super()
    const headerTemplate = this.content()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [style]
    shadowRoot.appendChild(headerTemplate.content)

    this._openButton = this.shadowRoot.querySelector('.open-button')
    this._openButton.addEventListener('click', () => {
      this.shadowRoot.querySelector('.sidebar').style.display = 'flex'
      // this.shadowRoot.querySelector('.fullbar').style.filter = 'blur(5px)'
      // this.parentElement.style.filter = 'blur(5px)'
      // this.parentElement.querySelector('main').style.backdropFilter = 'blur(10px)'
      // this.parentElement.querySelector('main').style.zIndex = '50'
      // this.parentElement.querySelector('main').style.filter = 'blur(10px)'
    })
    this._openButtonIcon = shadowRoot.querySelector('.open-button i')
    this._openButtonIcon.addEventListener('mouseover', () => {
      this._openButtonIcon.classList.add('fa-beat-fade')
    })
    this._openButtonIcon.addEventListener('mouseout', () => {
      this._openButtonIcon.classList.remove('fa-beat-fade')
    })

    this._closeButton = this.shadowRoot.querySelector('.close-button')
    this._closeButtonIcon = shadowRoot.querySelector('.close-button i')
    this._closeButtonIcon.addEventListener('mouseover', () => {
      this._closeButtonIcon.classList.add('fa-beat-fade')
    })
    this._closeButtonIcon.addEventListener('mouseout', () => {
      this._closeButtonIcon.classList.remove('fa-beat-fade')
    })
    this._closeButton.addEventListener('click', () => {
      this.shadowRoot.querySelector('.sidebar').style.display = 'none'
      this.parentElement.querySelector('main').style.filter = 'none'
    })

    this._windowScrollY = window.scrollY
    this._fullBarNav = this.shadowRoot.querySelector('.fullbar nav')
    if (this._windowScrollY > 0) {
      this._fullBarNav.classList.toggle('sticky', window.scrollY > 0)
    }
    window.addEventListener('scroll', () => {
      this._fullBarNav.classList.toggle('sticky', window.scrollY > 0)
    })
  }
  connectedCallback() {
    console.log('Ready to go 😎')
  }
  content() {
    const headerTemplate = document.createElement('template')

    headerTemplate.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <header>
          <ul class="sidebar">
            <nav>
              <li>
                <button class="close-button"><i class="fa-solid fa-xmark fa-2x"></i></button>
              </li>
              <li><a href="/">NEW</a></li>
              <li><a href="/">USED</a></li>
              <li><a href="/">TRADE</a></li>
              <li><a href="/">RENTALS</a></li>
              <li><a href="/">CAR CARE</a></li>
              <li><a href="/">ABOUT</a></li>
            </nav>
          </ul>
          <ul class="fullbar">
            <nav>
              <li>
                <img src="../assets/brand/tiny-3.png" alt="Mr Stash Cars Logo" />
              </li>
              <li><a href="/">NEW</a></li>
              <li><a href="/">USED</a></li>
              <li><a href="/">TRADE</a></li>
              <li><a href="/">RENTALS</a></li>
              <li><a href="/">CAR CARE</a></li>
              <li><a href="/">ABOUT</a></li>
              <li>
                <!-- <button class="open-button"><i class="fa-solid fa-bars fa-3x"></i></button> -->
                <button class="open-button"><i class="fa-solid fa-bars fa-2x"></i></button>
              </li>
            </nav>
          </ul>
        </header>
    `
    return headerTemplate
  }
}

customElements.define('responsive-header', Header)
