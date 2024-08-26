import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-button.js';

@customElement('todo-app')
export class TodoApp extends LitElement {
  handleClick() {
    console.log("clicked");
  }
  render() {
    return html`
        <lion-button @click="${this.handleClick}">click</lion-button>
    `;
  }
}
