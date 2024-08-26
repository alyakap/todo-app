import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';

@customElement('todo-app')
export class TodoApp extends LitElement {

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

        <lion-listbox>
          ${this.todoItems.map(item => html`
            <lion-option .choiceValue="${item.text}">
              ${item.text}
            </lion-option>
          `)}
        </lion-listbox>

    `;
  }
}
