
import { css } from 'lit';
import { LionButton} from '@lion/ui/button.js';


class RemoveButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* Add your custom styles here */
        
      `,
    ];
  }
}
customElements.define('remove-button', RemoveButton);
