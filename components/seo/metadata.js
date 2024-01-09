export default class Metadata {
  constructor(parentElement) {
    this.metaElements = this.content()
    this._parentElement = parentElement
  }
  init() {
    this.metaElements.forEach((meta) => {
      this._parentElement.appendChild(meta)
    })
  }
  content() {
    const tags = [
      [
        {
          name: 'name',
          value: 'description',
        },
        {
          name: 'content',
          value:
            'Explore a Wide Selection of Quality Used Cars at [Website Name]. Discover Reliable Pre-Owned Vehicles from Trusted Brands, Expertly Inspected and Ready for the Road. Shop with Confidence and Find Your Perfect Ride Today!',
        },
      ],
      [
        {
          name: 'property',
          value: 'og:title',
        },
        {
          name: 'content',
          value: 'Mr Stash Cars',
        },
      ],
      [
        {
          name: 'property',
          value: 'og:type',
        },
        {
          name: 'content',
          value: 'website',
        },
      ],
      [
        {
          name: 'property',
          value: 'og:description',
        },
        {
          name: 'content',
          value:
            'Explore a Wide Selection of Quality Used Cars at [Website Name]. Discover Reliable Pre-Owned Vehicles from Trusted Brands, Expertly Inspected and Ready for the Road. Shop with Confidence and Find Your Perfect Ride Today!',
        },
      ],
      [
        {
          name: 'property',
          value: 'og:url',
        },
        {
          name: 'content',
          value: 'https://mr-stash-cars.netlify.app/',
        },
      ],
      [
        {
          name: 'property',
          value: 'og:image',
        },
        {
          name: 'content',
          value: 'https://mr-stash-cars.netlify.app/icon.png',
        },
      ],
    ]

    const metaElements = tags.map((element) => {
      const meta = document.createElement('meta')
      element.forEach((attribute) => {
        meta.setAttribute(attribute.name, attribute.value)
      })
      return meta
    })
    return metaElements
  }
}
