import { css } from 'lit';
import { LionInput } from '@lion/ui/input.js';

class NewItemInput extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          width: 100%;
          border: 0.06rem;
          border-radius: 0.3rem;
          padding: 1rem;
          font-size: 1rem;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      `,
    ];
  }
}
customElements.define('newitem-input', NewItemInput);
