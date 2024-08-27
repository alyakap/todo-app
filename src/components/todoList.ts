import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './newItem-input.js';
import './list-box.js';
import './todo-item.js';
import './main-button.js';

interface TodoItem {
  text: string;
}
interface LionInputElement extends HTMLInputElement {
  modelValue: string;
}

@customElement('todo-list')
export class TodoList extends LitElement {
  static styles = css`
    :host {
      font-family: 'ING Me Regular', sans-serif;
    }
  `;

  @property({ type: Array }) items: TodoItem[] = [];

  _addNewItem(e: Event) {
    if (e) e.preventDefault();
    const input = this.shadowRoot?.getElementById(
      'addTodoInput',
    ) as LionInputElement;
    const inputValue = input.modelValue;
    if (inputValue) {
      const newItem: TodoItem = { text: input.value };
      this.dispatchEvent(new CustomEvent('add-item', { detail: newItem }));
      input.modelValue = '';
    }
  }

  _removeItem(text: string) {
    this.dispatchEvent(new CustomEvent('remove-item', { detail: text }));
  }

  render() {
    return html`
      <newitem-input id="addTodoInput" .modelValue=${''}></newitem-input>

      <main-button
        text="Add item"
        customStyledClass="add"
        @click=${this._addNewItem.bind(this)}
      >
      </main-button>

      <list-box name="listbox">
        ${this.items.map(
          item => html`
            <todo-item .text="${item.text}">
              <main-button
                text="X"
                customStyledClass="remove"
                @click=${() => this._removeItem(item.text)}
              >
              </main-button>
            </todo-item>
          `,
        )}
      </list-box>
    `;
  }
}
