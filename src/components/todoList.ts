import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './todoitem';
import '@lion/ui/define/lion-listbox.js';

import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';

@customElement('todo-list')
export class TodoList extends LitElement {

  @property({ type: Array }) todoItems = [
    { text: 'Wash the dishes', completed: false },
    { text: 'Buy groceries', completed: false },
  ];

  _addNewItem(e: Event) {
    if (e) {
      e.preventDefault();
    }
    const input = this.shadowRoot?.getElementById('addTodoInput') as HTMLInputElement;
    if (input.value) {
      const newItem = { text: input.value, completed: false };
      this.todoItems = [...this.todoItems, newItem];
      input.value = ''; 
    }
  }

  render() {
    return html`
      <lion-input id="addTodoInput"></lion-input>
      <lion-button @click="${this._addNewItem}">Add item</lion-button>

      <lion-listbox name="listbox" label="things to do">
        ${this.todoItems.map(item => html`
          <todo-item .text="${item.text}" .completed="${item.completed}"></todo-item>
        `)}
        </lion-listbox>
    `;
  }
}
