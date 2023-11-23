import '../css/style.css'
import 'normalize.css'

// eslint-disable-next-line no-unused-vars
const template = /* html */ `
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
// eslint-disable-next-line no-undef
class FeatureCard extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = template
  }
}

// eslint-disable-next-line no-undef
customElements.define('feature-card', FeatureCard)
