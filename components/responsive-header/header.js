export default class Header {
  constructor(parentElement) {
    this.innerHTML = this.content()
    this._parentElement = parentElement
  }
  init() {
    this._parentElement.innerHTML = this.innerHTML
  }
  listeners() {}
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
