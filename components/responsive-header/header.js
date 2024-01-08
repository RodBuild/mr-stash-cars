export default class Header {
  constructor(parentElement) {
    this.windowScrollY = window.scrollY
    this.innerHTML = this.content()
    this._parentElement = parentElement
  }
  init() {
    this._parentElement.innerHTML = this.innerHTML
    this.listeners()
  }
  listeners() {
    const openButton = document.querySelector('button.open-button')
    openButton.addEventListener('click', () => {
      document.querySelector('nav.sidebar').style.display = 'flex'
    })

    const closeButton = document.querySelector('button.close-button')
    closeButton.addEventListener('click', () => {
      document.querySelector('nav.sidebar').style.display = 'none'
    })

    const fullBarElement = document.querySelector('header nav.fullbar')
    if (this._windowScrollY > 0) {
      fullBarElement.classList.toggle('sticky', window.scrollY > 0)
    }
    window.addEventListener('scroll', () => {
      fullBarElement.classList.toggle('sticky', window.scrollY > 0)
    })
  }
  content() {
    return `
      <nav class="sidebar">
        <ul>
          <li>
            <button class="close-button"><i class="fa-solid fa-xmark fa-xl"></i></button>
          </li>
          <li><a href="/">NEW</a></li>
          <li><a href="/">USED</a></li>
          <li><a href="/">TRADE</a></li>
          <li><a href="/">RENTALS</a></li>
          <li><a href="/">CAR CARE</a></li>
          <li><a href="/">ABOUT</a></li>
        </ul>
      </nav>
      <nav class="fullbar">
        <ul>
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
            <button class="open-button"><i class="fa-solid fa-bars fa-xl"></i></button>
          </li>
        </ul>
      </nav>`
  }
}
