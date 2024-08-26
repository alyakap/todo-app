import { css, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class RemoveButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        
      `,
    ];
  }

  render() {
    return html`<slot>X</slot>`;
  }
}
customElements.define('remove-button', RemoveButton);
