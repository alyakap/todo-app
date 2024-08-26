
import { css } from 'lit';
import { LionListbox } from '@lion/ui/listbox.js';


class ListBox extends LionListbox {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* Add your custom styles here */
        
      `,
    ];
  }
}
customElements.define('list-box', ListBox);
