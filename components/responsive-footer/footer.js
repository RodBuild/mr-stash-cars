import style from './footer.css' assert { type: 'css' }

export default class Footer {
  constructor(parentElement, backgroundColor) {
    this.innerHTML = this.content()
    // this.style = document.createElement('style')
    // this.loadStyle()
    // this.shadowRoot = parentElement.attachShadow({ mode: 'open' })
    // this.shadowRoot.adoptedStyleSheets = [style]
    // this.shadowRoot.innerHTML = this.innerHTML
    // console.log(this.innerHTML)
    parentElement.innerHTML = this.innerHTML
  }
  connectedCallback() {
    console.log('Ready to go 😎')
  }
  loadStyle() {
    if (this.style.styleSheet) {
      this.style.styleSheet.cssText = css
    } else {
      this.style.appendChild(document.createTextNode(css))
    }
  }
  content() {
    // const headerTemplate = document.createElement('template')
    // headerTemplate.innerHTML = `
    return `
      <div class="content">
        <ul class="shopping-tools">
          <li>SHOPPING TOOLS</li>
          <li>Trade-In</li>
          <li></li>
        </ul>
        <ul class="vehicles">
          <li>VEHICLES</li>
          <li>ALL Vehicles</li>
          <li>New Vehicles</li>
          <li>Pre-Owned Vehicles</li>
          <li>Priced Under 10K</li>
        </ul>
        <ul class="car-care">
          <li>CAR CARE</li>
          <li>Appointments</li>
          <li>Vehicle Checkup</li>
          <li>Fluids Check</li>
          <li>Brake Check</li>
          <!-- <li>Oil Change</li> -->
        </ul>
        <ul class="about">
          <li>ABOUT MR STASH.</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Find Us</li>
          <li>Our Goal</li>
        </ul>
      </div>
      <div class="social"></div>
      <div class="copyright"></div>`

    // console.log(headerTemplate)
    // return headerTemplate.content
  }
}
