export default class Footer {
  constructor(parentElement) {
    this.innerHTML = this.content()
    this._parentElement = parentElement
  }
  init() {
    this._parentElement.innerHTML = this.innerHTML
    this.listeners()
  }
  listeners() {
    const collapsibleHeaders = document.querySelectorAll('div.collapsible h3')
    collapsibleHeaders.forEach((element) => {
      element.addEventListener('click', () => {
        const buttonReference = element.children[0]
        const buttonCurrentValue = buttonReference.getAttribute('aria-expanded')
        buttonReference.setAttribute('aria-expanded', buttonCurrentValue === 'false' ? 'true' : 'false')
        const iconReference = element.querySelector('i')
        const iconCurrentValue = iconReference.className
        iconReference.className = iconCurrentValue.includes('plus')
          ? 'fa-solid fa-minus fa-xl'
          : 'fa-solid fa-plus fa-xl'
        element.nextElementSibling.classList.toggle('hidden')
      })
    })
  }
  content() {
    return `
      <div class="content">
        <div class="collapsible">
          <h3 class="heading">
            <button aria-expanded="false">
              <p>SHOPPING TOOLS</p>
              <i class="fa-solid fa-plus fa-xl"></i>
            </button>
          </h3>
          <div class="collapsible-content hidden">
            <ul>
              <li><a href="#">Trade-In</a></li>
              <li><a href="#">Test Drive a Car</a></li>
              <li><a href="#">Search Inventory</a></li>
              <li><a href="#">Priced Under 10K</a></li>
            </ul>
          </div>
        </div>
        <div class="collapsible">
          <h3 class="heading">
            <button aria-expanded="false">
              <p>VEHICLES</p>
              <i class="fa-solid fa-plus fa-xl"></i>
            </button>
          </h3>
          <div class="collapsible-content hidden">
            <ul>
              <li><a href="#">All Vehicles</a></li>
              <li><a href="#">SUVs</a></li>
              <li><a href="#">Trucks</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Vans</a></li>
              <li><a href="#">Crossover</a></li>
              <li><a href="#">Hybrids</a></li>
              <li><a href="#">Electric</a></li>
            </ul>
          </div>
        </div>
        <div class="collapsible">
          <h3 class="heading">
            <button aria-expanded="false">
              <p>CAR CARE</p>
              <i class="fa-solid fa-plus fa-xl"></i>
            </button>
          </h3>
          <div class="collapsible-content hidden">
            <ul>
              <li><a href="#">Appointments</a></li>
              <li><a href="#">General Check</a></li>
              <li><a href="#">Fluids Check</a></li>
              <li><a href="#">Brake Check</a></li>
              <li><a href="#">Engine Check</a></li>
            </ul>
          </div>
        </div>
         <div class="collapsible">
          <h3 class="heading">
            <button aria-expanded="false">
              <p>ABOUT MR STASH</p>
              <i class="fa-solid fa-plus fa-xl"></i>
            </button>
          </h3>
          <div class="collapsible-content hidden">
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find Us</a></li>
              <li><a href="#">Our Goal</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="social">
        <ul>
          <li><a href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-youtube fa-2xl"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-x-twitter fa-2xl"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a></li>
        </ul>
      </div>
      <div class="copyright">COPYRIGHT © 2024 mr stash</div>`
  }
}
