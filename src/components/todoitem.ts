import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-option.js';

@customElement('todo-item')
export class TodoItem extends LitElement {

  @property({ type: String }) text = '';
  @property({ type: Boolean }) completed = false;

  static styles = css`
    .completed {
      text-decoration: line-through;
    }
  `;

  render() {
    return html`
      <lion-option class="${this.completed ? 'completed' : ''}">
        ${this.text}
      </lion-option>
    `;
  }
}
