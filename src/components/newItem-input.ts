
import { css } from 'lit';
import { LionInput } from '@lion/ui/input.js';


class NewItemInput extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* Add your custom styles here */
        input {
          border: 2px solid blue;
          border-radius: 4px;
          padding: 10px;
        }
      `,
    ];
  }
}
customElements.define('newitem-input', NewItemInput);