import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-option.js';

@customElement('todo-item')
export class TodoItem extends LitElement {

  @property({ type: String }) text = '';


  render() {
    return html`
      <lion-option>
        ${this.text}
      </lion-option>
    `;
  }
}
