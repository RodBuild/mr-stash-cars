import Header from './responsive-header/header.js'
import Footer from './responsive-footer/footer.js'
import Meta from './seo/metadata.js'

const headElement = document.querySelector('head')
const meta = new Meta(headElement)
meta.init()

const headerElement = document.querySelector('header')
const header = new Header(headerElement, false)
header.init()

const footerElement = document.querySelector('footer')
const footer = new Footer(footerElement)

footer.init()

// Skeletons
const images = document.querySelectorAll('img')
images.forEach((element) => {
  function loaded() {
    element.parentElement.style.backgroundImage = 'none'
    element.classList.add('loaded')
  }
  if (element.complete) {
    loaded()
  } else {
    element.addEventListener('load', loaded)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const skeletons = document.querySelectorAll('.skeleton')
  skeletons.forEach((element) => {
    element.classList.remove('skeleton')
  })
})
