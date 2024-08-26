
import { css } from 'lit';
import { LionButton} from '@lion/ui/button.js';


class Addbutton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* Add your custom styles here */
        
      `,
    ];
  }
}
customElements.define('add-button', Addbutton);
