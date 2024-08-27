import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './newItem-input.js';
import './list-box.js';
import './todo-item.js';
import './main-button.js';

interface TodoItem {
  text: string;
  id: number;
}

@customElement('todo-list')
export class TodoList extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .input-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        newitem-input {
          flex-grow: 1;
        }

        main-button.add {
          margin-left: 0.5rem;
        }

        list-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      `,
    ];
  }

  @property({ type: Array }) items: TodoItem[] = [];

  private _nextId = 1;

  _addNewItem(e: Event) {
    if (e) e.preventDefault();
    const input = this.shadowRoot?.getElementById(
      'addTodoInput',
    ) as HTMLInputElement & { modelValue: string };
    const inputValue = input.modelValue;
    if (inputValue) {
      const newItem: TodoItem = { text: inputValue, id: this._nextId++ };
      this.dispatchEvent(new CustomEvent('add-item', { detail: newItem }));
      input.modelValue = '';
    }
  }

  _removeItem(id: number) {
    this.dispatchEvent(new CustomEvent('remove-item', { detail: id }));
  }

  render() {
    return html`
      <div class="input-container">
        <newitem-input
          id="addTodoInput"
          .modelValue=${''}
          class="customStyle"
        ></newitem-input>

        <main-button
          text="Add"
          customStyledClass="add"
          @click=${this._addNewItem.bind(this)}
        ></main-button>
      </div>

      <list-box name="listbox">
        ${this.items.map(
          item => html`
            <todo-item .text="${item.text}">
              <main-button
                text="X"
                customStyledClass="remove"
                @click=${() => this._removeItem(item.id)}
              ></main-button>
            </todo-item>
          `,
        )}
      </list-box>
    `;
  }
}
