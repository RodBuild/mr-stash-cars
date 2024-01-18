const benefitsData = [
  {
    title: 'Discounted Services',
    description:
      "As our valued customer, you'll enjoy discounted rates on essential services, ensuring your vehicle stays in top shape without straining your budget. Drive with confidence, knowing we've got your maintenance needs covered affordably.",
    image: './assets/benefits/discounted-services.jpg',
    // image:
    // 'https://leahysauto.com/wp-content/uploads/2019/07/Four-Types-Of-Major-Car-Repairs-That-Are-Best-Handled-By-A-Trained-Mechanic.png',
  },
  {
    title: 'Detailed Inspections',
    description:
      "Experience peace of mind with our thorough vehicle inspections and Carfax reports. Our commitment to transparency ensures you know the complete history and condition of your chosen car. Drive confidently, knowing you've made an informed decision with our dealership.",
    image: './assets/benefits/detailed-inspections.jpg',
  },
  {
    title: 'Vehicle Warranty',
    description:
      "Enjoy extra peace of mind with our complimentary warranty benefit. Every car purchase includes a free warranty, offering added protection and assurance. Drive with confidence, knowing we've got you covered. It's our commitment to your satisfaction and worry-free driving.",
    image: './assets/benefits/vehicle-warranty.jpg',
  },
  {
    title: 'Transparent Pricing',
    description:
      "No hidden fees, no surprises—just straightforward pricing you can trust. We believe in clarity, ensuring you have all the information you need for a confident and informed decision. Drive away with peace of mind, knowing you've received the best value for your investment.",
    image: './assets/benefits/transparent-pricing.jpg',
  },
]

// class Benefits {
//   constructor() {
//     this.currentIndex = 0
//     this.container = document.querySelector('.benefits .container')
//     this.data = benefitsData
//     this.dataLength = this.data.length
//   }
//   pictureNavStructure() {
//     function allImages(data) {
//       let string = ''
//       data.forEach((element) => {
//         element.image
//         string += `
//           <img
//             loading="lazy"
//             src=${element.image}
//             alt="${element.title} picture"
//           />
//         `
//       })
//       return string
//     }
//     const imagesHTML = allImages(this.data)
//     return `
//       <div class="gallery snaps-inline">
//         ${imagesHTML}
//       </div>
//       <nav>
//         <span>
//           ${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength.toString().padStart(2, '0')}
//         </span>
//         <button class="left-nav" >
//           <i class="fa-solid fa-chevron-left"></i>
//         </button>
//         <button class="right-nav">
//           <i class="fa-solid fa-chevron-right"></i>
//         </button>
//       </nav>
//     `
//   }
//   descriptionStructure() {
//     const context = this.data[this.currentIndex]
//     return `
//       <h3>${context.title}</h3>
//       <p>${context.description}</p>
//     `
//   }
//   eventListeners() {
//     let isDragStart = false,
//       prevPageX,
//       prevScrollLeft
//     const galleryContainer = this.container.querySelector('.gallery')
//     galleryContainer.addEventListener('mousemove', (e) => {
//       if (!isDragStart) return
//       e.preventDefault()
//       // galleryContainer.classList.add('dragging')
//       let positionDiff = e.pageX - prevPageX
//       galleryContainer.scrollLeft = prevScrollLeft - positionDiff
//     })
//     galleryContainer.addEventListener('mousedown', (e) => {
//       isDragStart = true
//       galleryContainer.classList.add('dragging')
//       prevPageX = e.pageX
//       prevScrollLeft = galleryContainer.scrollLeft
//     })
//     galleryContainer.addEventListener('mouseup', () => {
//       galleryContainer.classList.remove('dragging')
//       isDragStart = false
//     })

//     const images = this.container.querySelectorAll('.gallery img')

//     const leftButton = this.container.querySelector('.picture-nav nav button.left-nav')
//     leftButton.addEventListener('click', () => {
//       console.log(this.currentIndex)
//       if (this.currentIndex > 0) {
//         this.currentIndex -= 1
//         galleryContainer.scrollLeft += -images[0].clientWidth
//         this.updateContent()
//       }
//     })

//     const rightButton = this.container.querySelector('.picture-nav nav button.right-nav')
//     rightButton.addEventListener('click', () => {
//       console.log(this.currentIndex)
//       if (this.currentIndex < this.dataLength - 1) {
//         this.currentIndex += 1
//         galleryContainer.scrollLeft += images[0].clientWidth
//         this.updateContent()
//       }
//     })
//   }
//   updateContent() {
//     if (this.currentIndex >= 0 && this.currentIndex < this.dataLength) {
//       const breadCrumbs = this.container.querySelector('.picture-nav span')
//       const textContainer = this.container.querySelector('.description')
//       const textHTML = this.descriptionStructure()
//       textContainer.innerHTML = textHTML
//       breadCrumbs.innerHTML = `${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength
//         .toString()
//         .padStart(2, '0')}`
//     } else {
//       throw new RangeError(`index range is not valid, ${this.currentIndex}`)
//     }
//   }
//   init() {
//     try {
//       const pictureContainer = this.container.querySelector('.picture-nav')
//       const pictureHTML = this.pictureNavStructure()
//       pictureContainer.innerHTML = pictureHTML
//       this.updateContent()
//       this.eventListeners()
//     } catch (err) {
//       console.log(err.message)
//     }
//   }
// }

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
      this.currentIndex = Math.ceil(currentScrollLeftLocation / imageSize)
      this.updateButtons()
      this.updateData()
    })
    container.addEventListener('scroll', () => {
      console.log('scrolling!')
      this.descriptionContainer.classList.add('loading')
      const imageSize = container.scrollWidth / this.dataLength
      const currentScrollLeftLocation = container.scrollLeft
      this.currentIndex = Math.round(currentScrollLeftLocation / imageSize)
      this.updateButtons()
      this.updateData()
      setTimeout(() => {
        this.descriptionContainer.classList.remove('loading')
      }, 300)
    })
  }
  loadImageNav() {
    const html = `
      <span>
        ${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength.toString().padStart(2, '0')}
      </span>
      <button class="left-nav disabled" >
        <i class="fa-solid fa-chevron-left fa-lg"></i>
      </button>
      <button class="right-nav">
        <i class="fa-solid fa-chevron-right fa-lg"></i>
      </button>
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
    const imageIndex = this.container.querySelector('.picture-nav span')
    imageIndex.innerHTML = `${(this.currentIndex + 1).toString().padStart(2, '0')} / ${this.dataLength
      .toString()
      .padStart(2, '0')}`

    const imageTitle = this.descriptionContainer.querySelector('h3')
    imageTitle.innerHTML = context.title
    const imageDescription = this.container.querySelector('p')
    imageDescription.innerHTML = context.description
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
      console.log('neutral move')
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
          this.descriptionContainer.classList.add('loading')
          const direction = button.className.includes('left') ? 'left' : 'right'
          this.currentIndex = button.className.includes('left') ? this.currentIndex - 1 : this.currentIndex + 1
          this.updateButtons(direction)
          this.updateImage()
          this.updateData()
          setTimeout(() => {
            this.descriptionContainer.classList.remove('loading')
          }, 300)
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

const benefits = new Benefits()
benefits.init()
