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
        /* Add your custom styles here */
        :host {
          display: block;
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }
      `,
    ];
  }

  render() {
    return html`
      <span>${this.text}</span>
      <slot></slot>
    `;}
}
customElements.define('todo-item', TodoItem);
