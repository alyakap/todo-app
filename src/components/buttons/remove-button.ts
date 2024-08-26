import { css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class RemoveButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        
      `,
    ];
  }
}
customElements.define('remove-button', RemoveButton);
