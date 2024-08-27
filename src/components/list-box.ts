import { css } from 'lit';
import { LionListbox } from '@lion/ui/listbox.js';

class ListBox extends LionListbox {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          max-height: 300px;
          overflow-y: auto;
        }
      `,
    ];
  }
}
customElements.define('list-box', ListBox);
