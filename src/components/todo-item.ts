import { html, css } from 'lit';
import { LionOption } from '@lion/ui/listbox.js';

interface TodoItem {
  text: string;
}

class TodoItem extends LionOption {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: 'ING Me Regular', sans-serif;
        }
      `,
    ];
  }

  render() {
    return html`
      <span>${this.text}</span>
      <slot></slot>
    `;
  }
}
customElements.define('todo-item', TodoItem);
