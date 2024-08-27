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
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
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
