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
        .root {
          color: var(--white);
          font-size: 1.1rem;
          padding: 0.7rem 1.5rem;
          border-radius: 0.3rem;
          border: none;
          right: 0.5rem;
          bottom: 0.5rem;
        }
        .remove {
          background-color: #ffcccc;
        }
        .show {
          background-color: blue;
        }
        .hide {
          background-color: green;
        }
        .add {
          background-color: orange;
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
