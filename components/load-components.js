import Header from './responsive-header/header.js'
import Footer from './responsive-footer/footer.js'

const headerElement = document.querySelector('header')
const header = new Header(headerElement)
header.init()

const footerElement = document.querySelector('footer')
const footer = new Footer(footerElement)

footer.init()
