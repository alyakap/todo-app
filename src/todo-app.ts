import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/todoList.js';
import '@lion/ui/define/lion-button.js';

@customElement('todo-app')
export class TodoApp extends LitElement {

  @property({ type: Boolean }) showList = false;

  toggleListVisibility() {
    this.showList = !this.showList;
  }

  render() {
    return html`
      <lion-button @click=${this.toggleListVisibility.bind(this)}>
        ${this.showList ? 'Hide List' : 'Show List'}
      </lion-button>

      ${this.showList ? html`<todo-list></todo-list>` : ''}
    `;
  }
}
