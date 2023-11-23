import '../css/style.css'
import 'normalize.css'
// eslint-disable-next-line camelcase
import { fa5_brands_facebookF, fa5_brands_twitter, fa5_brands_instagram } from 'fontawesome-svgs'

// Feature card component

// eslint-disable-next-line no-undef
class FeatureCard extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = /* html */ `
    <article class="feature">
      <div class="feature__box">
        <div class="feature__img-box">
          <slot name="image"></slot>
        </div>
        <h2><slot name="title"></slot></h2>    
        <p><slot name="text"></slot></p>    
      </div>
    </article>
    <style>
      * {
        box-sizing: border-box;
      }      
    </style>
    `
  }
}

// eslint-disable-next-line no-undef
customElements.define('feature-card', FeatureCard)

// Contact item (footer) component

// eslint-disable-next-line no-undef
class ContactItem extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = /* html */`
      <div class="contact__item">
        <div class="contact__icon">
          <slot name="image"></slot>
        </div>
        <slot name="text"></slot>
      </div>
      `
  }
}

// Social icons component

const $socialIcons = document.createElement('DIV')
const socialIconsStyles = document.createElement('STYLE')
socialIconsStyles.textContent = /* css */`
  .icon-box {
    border: 1px solid;
  }
  svg {
    font-size: 2em;
  }
`

// eslint-disable-next-line camelcase
const faIcons = [fa5_brands_facebookF, fa5_brands_twitter, fa5_brands_instagram]

faIcons.forEach(icon => {
  const box = document.createElement('DIV')
  box.classList.add('icon-box')
  box.innerHTML = icon
  $socialIcons.append(box)
})

// eslint-disable-next-line no-undef
customElements.define('contact-item', ContactItem)

// eslint-disable-next-line no-undef
class SocialIcons extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(socialIconsStyles, $socialIcons)
  }
}

// eslint-disable-next-line no-undef
customElements.define('social-icons', SocialIcons)
