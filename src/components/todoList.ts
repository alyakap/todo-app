import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './new-item-input';
import './listElements/list-box.js';
import './buttons/add-button.js';
import './listElements/todo-item.js';
import './buttons/remove-button.js';

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
    const input = this.shadowRoot?.getElementById('addTodoInput') as any;

    const inputValue = input.modelValue;
    if (inputValue) {
      const newItem: TodoItem = { text: input.value};
      this.dispatchEvent(new CustomEvent('add-item', { detail: newItem }));
      input.modelValue = ''; 
    }
  }

  _removeItem(text: string) {
    this.dispatchEvent(new CustomEvent('remove-item', { detail: text }));
  }

  render() {
    return html`
      <new-item-input id="addTodoInput" .modelValue=${''}></new-item-input>
      <add-button @click=${this._addNewItem.bind(this)}>Add item</add-button>

      <list-box name="listbox">
        ${this.items.map((item) => html`
          <todo-item .text="${item.text}">
            <remove-button @click=${() => this._removeItem(item.text)}></remove-button>
          </todo-item>
        `)}
      </list-box>
    `;
  }
}
