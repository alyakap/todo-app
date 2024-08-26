import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import './todoitem';

interface TodoItem {
  text: string;
}

@customElement('todo-list')
export class TodoList extends LitElement {

  @property({ type: Array }) items: TodoItem[] = [];

  _addNewItem(e: Event) {
    if (e) {
      e.preventDefault();
    }
    const input = this.shadowRoot?.getElementById('addTodoInput') as HTMLInputElement;
    if (input.value) {
      const newItem: TodoItem = { text: input.value};
      this.dispatchEvent(new CustomEvent('add-item', { detail: newItem }));
      input.value = ''; 
    }
  }

  render() {
    return html`
  
      <lion-input id="addTodoInput"></lion-input>
      <lion-button @click=${this._addNewItem.bind(this)}>Add item</lion-button>

      <lion-listbox name="listbox">
        ${this.items.map(item => html`
          <todo-item .text="${item.text}"></todo-item>
        `)}
        </lion-listbox>

    `;
  }
}
