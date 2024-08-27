import { html, css, LitElement } from 'lit';
import { LionButton } from '@lion/ui/button.js';

interface MainButton {
  text: string;
  customStyledClass: string;
}

class MainButton extends LionButton {
  static get properties() {
    return {
      ...super.properties, // Spread all inherited properties
      text: { type: String }, // Your custom property
      customStyledClass: { type: String }, // Another custom property
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex; /* Flexbox layout */
          justify-content: space-between;
          align-items: center;
          padding: 0;
          margin: 0;
          background-color: inherit;
        }

        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 1.1rem;
          padding: 1rem 1rem;
          border-radius: 0.3rem;
          border: none;
          background-color: inherit;
        }

        :host(:hover) {
          background: inherit;
        }

        .remove {
          background-color: red;
        }

        .show {
          position: fixed;
          top: 50%;
          right: 50%;
          background-color: white;
        }

        .hide {
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: white;
          z-index: 10;
        }

        .add {
          background-color: aqua;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.text = '';
    this.customStyledClass = '';
  }

  render() {
    return html`
      <div class="root ${this.customStyledClass}">
        <span>${this.text}</span>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('main-button', MainButton);
