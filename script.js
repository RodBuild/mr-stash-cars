const benefitsData = [
  {
    title: 'Discounted Services',
    description:
      "As our valued customer, you'll enjoy discounted rates on essential services, ensuring your vehicle stays in top shape without straining your budget. Drive with confidence, knowing we've got your maintenance needs covered affordably.",
    image: './assets/benefits/discounted-services.jpg',
    buttonText: 'Explore our services',
    buttonURL: './car-care/search',
  },
  {
    title: 'Detailed Inspections',
    description:
      "Experience peace of mind with our thorough vehicle inspections and Carfax reports. Our commitment to transparency ensures you know the complete history and condition of your chosen car. Drive confidently, knowing you've made an informed decision with our dealership.",
    image: './assets/benefits/detailed-inspections.jpg',
    buttonText: 'Search our inventory',
    buttonURL: './vehicles/search',
  },
  {
    title: 'Vehicle Warranty',
    description:
      "Enjoy extra peace of mind with our complimentary warranty benefit. Every car purchase includes a free warranty, offering added protection and assurance. Drive with confidence, knowing we've got you covered. It's our commitment to your satisfaction and worry-free driving.",
    image: './assets/benefits/vehicle-warranty.jpg',
    buttonText: 'View details',
    buttonURL: './vehicles/warranty',
  },
  {
    title: 'Transparent Pricing',
    description:
      "No hidden fees, no surprises—just straightforward pricing you can trust. We believe in clarity, ensuring you have all the information you need for a confident and informed decision. Drive away with peace of mind, knowing you've received the best value for your investment.",
    image: './assets/benefits/transparent-pricing.jpg',
    buttonText: 'Learn more',
    buttonURL: './vehicles/pricing',
  },
]

class Benefits {
  constructor() {
    this.currentIndex = 0
    this.container = document.querySelector('.benefits .container')
    this.pictureNavContainer = this.container.querySelector('.picture-nav')
    this.descriptionContainer = this.container.querySelector('.description')
    this.data = benefitsData
    this.dataLength = this.data.length
  }
  loadImages() {
    let imagesElements = ''
    this.data.forEach((entry) => {
      imagesElements += `
        <img
          loading="lazy"
          src=${entry.image}
          alt="${entry.title} picture"
        />
      `
    })
    const galleryElement = document.createElement('div')
    galleryElement.classList.add('gallery')
    galleryElement.classList.add('snaps-inline')
    galleryElement.innerHTML = imagesElements
    this.pictureNavContainer.appendChild(galleryElement)
  }
  scroller() {
    let startX,
      scrollLeft,
      isDown = false
    const container = this.pictureNavContainer.querySelector('.gallery')
    container.addEventListener('mousedown', (e) => {
      isDown = true
      this.descriptionContainer.classList.add('loading')
      container.classList.add('active')
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    })
    container.addEventListener('mouseleave', () => {
      isDown = false
      this.descriptionContainer.classList.remove('loading')
      container.classList.remove('active')
    })
    container.addEventListener('mouseup', () => {
      isDown = false
      this.descriptionContainer.classList.remove('loading')
      container.classList.remove('active')
    })
    container.addEventListener('mousemove', (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const move = (x - startX) * 2
      container.scrollLeft = scrollLeft - move

      const currentScrollLeftLocation = container.scrollLeft
      const imageSize = container.scrollWidth / this.dataLength
      this.currentIndex = Math.round(currentScrollLeftLocation / imageSize)
      this.updateButtons()
      this.updateData()
    })
    container.addEventListener('scroll', () => {
      console.log('scrolling!')
      const imageSize = container.scrollWidth / this.dataLength
      const currentScrollLeftLocation = container.scrollLeft
      this.currentIndex = Math.round(currentScrollLeftLocation / imageSize)
      this.updateButtons()
      this.updateData()
    })
  }
  loadImageNav() {
    const html = `
      <p>
        ${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength.toString().padStart(2, '0')}
      </p>
      <div class="buttons">
        <button class="left-nav disabled" >
          <i class="fa-solid fa-chevron-left fa-lg"></i>
        </button>
        <button class="right-nav">
          <i class="fa-solid fa-chevron-right fa-lg"></i>
        </button>
      </div>
    `
    const nav = document.createElement('nav')
    nav.innerHTML = html
    this.pictureNavContainer.appendChild(nav)
  }
  loadContent() {
    const context = this.data[this.currentIndex]
    const html = `
      <h3>${context.title}</h3>
      <p>${context.description}</p>
      <a href=${context.buttonURL}>
        <p>
          ${context.buttonText}
        </p>
        <i class="fa-solid fa-arrow-right fa-xl"></i>
      </a>
    `
    this.descriptionContainer.innerHTML = html
  }
  updateImage() {
    const container = this.pictureNavContainer.querySelector('.gallery')
    container.classList.add('active')
    const imageSize = container.scrollWidth / this.dataLength
    container.scrollLeft = imageSize * this.currentIndex
    setTimeout(() => {
      container.classList.remove('active')
    }, 1000)
  }
  updateData() {
    const context = this.data[this.currentIndex]
    const imageIndex = this.container.querySelector('.picture-nav p')
    imageIndex.innerHTML = `${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength
      .toString()
      .padStart(2, '0')}`

    const imageTitle = this.descriptionContainer.querySelector('h3')
    imageTitle.innerHTML = context.title
    const imageDescription = this.descriptionContainer.querySelector('p')
    imageDescription.innerHTML = context.description
    const linkText = this.descriptionContainer.querySelector('a p')
    linkText.innerHTML = context.buttonText
  }
  updateButtons(direction = null) {
    const leftButton = this.pictureNavContainer.querySelector('button.left-nav')
    const rightButton = this.pictureNavContainer.querySelector('button.right-nav')
    leftButton.classList.remove('active', 'disabled')
    rightButton.classList.remove('active', 'disabled')
    if (direction === 'right' || direction === 'r') {
      const newState = this.currentIndex >= this.dataLength - 1 ? 'disabled' : 'active'
      rightButton.classList.add(newState)
    } else if (direction === 'left' || direction === 'l') {
      const newState = this.currentIndex <= 0 ? 'disabled' : 'active'
      leftButton.classList.add(newState)
    } else {
      const rightState = this.currentIndex >= this.dataLength - 1 ? 'disabled' : null
      const leftState = this.currentIndex <= 0 ? 'disabled' : null
      if (rightState) rightButton.classList.add(rightState)
      if (leftState) leftButton.classList.add(leftState)
    }
  }
  eventListeners() {
    const buttons = this.pictureNavContainer.querySelectorAll('button')
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.className.includes('disabled') === false) {
          const direction = button.className.includes('left') ? 'left' : 'right'
          this.currentIndex = button.className.includes('left') ? this.currentIndex - 1 : this.currentIndex + 1
          this.updateButtons(direction)
          this.updateImage()
          this.updateData()
        }
      })
    })
  }
  init() {
    this.loadImages()
    this.loadImageNav()
    this.loadContent()
    this.scroller()
    this.eventListeners()
  }
}

class CTA {
  constructor() {
    this.offSet = 200
    this.currentLeftPostion = 0
    this.container = document.querySelector('.cta .container')
    this.scrollArea = this.container.querySelector('.content .scroll-items')
  }
  updatePosition() {
    this.scrollArea.scrollLeft = this.currentLeftPostion
  }
  updateButtons() {
    const leftButton = this.container.querySelector('button.cta-left')
    const rightButton = this.container.querySelector('button.cta-right')
    console.log(this.currentLeftPostion, this.scrollArea.scrollWidth, this.scrollArea.clientWidth)
    leftButton.classList.remove('disabled')
    rightButton.classList.remove('disabled')
    if (this.currentLeftPostion === 0) {
      leftButton.classList.add('disabled')
    } else if (this.currentLeftPostion + this.scrollArea.clientWidth > this.scrollArea.scrollWidth) {
      rightButton.classList.add('disabled')
    }
  }
  eventListeners() {
    const buttons = this.container.querySelectorAll('button')
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = button.className.includes('right') ? 'right' : 'left'
        const scrollDisplayeArea = this.scrollArea.clientWidth
        const scrollMaxArea = this.scrollArea.scrollWidth
        if (direction === 'right' || direction === 'r') {
          const newLeftPostion = this.currentLeftPostion + scrollDisplayeArea
          if (newLeftPostion < scrollMaxArea) {
            this.currentLeftPostion = newLeftPostion
            console.log(newLeftPostion)
          }
        } else if (direction === 'left' || direction === 'l') {
          const newLeftPostion = this.currentLeftPostion - scrollDisplayeArea
          if (newLeftPostion > 0) {
            this.currentLeftPostion = newLeftPostion
            console.log(newLeftPostion)
          } else {
            this.currentLeftPostion = 0
          }
        }
        this.updateButtons()
        this.updatePosition()
      })
    })
  }
  init() {
    this.eventListeners()
  }
}

class PopularRents {
  constructor() {
    this.container = document.querySelector('.popular-rents .container')
  }
}

const cta = new CTA()
cta.init()

const benefits = new Benefits()
benefits.init()
