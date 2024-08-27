import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './newItem-input.js';
import './list-box.js';
import './todo-item.js';
import './main-button.js';

@customElement('todo-list')
export class TodoList extends LitElement {
  static styles = css`
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

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid #ddd;
    }

    li button {
      background: #ff6666;
      border: none;
      color: white;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 5px;
    }

    li button:hover {
      background: #ff3333;
    }
  `;

  @property({ type: Array })
  todos: string[] = [];

  private _handleAddNewItem() {
    const input = this.shadowRoot?.getElementById(
      'addTodoInput',
    ) as HTMLInputElement;
    const inputValue = input.value.trim();
    if (inputValue) {
      this.dispatchEvent(new CustomEvent('add-item', { detail: inputValue }));
      input.value = '';
    }
  }

  private _handleRemoveTodo(index: number) {
    this.dispatchEvent(new CustomEvent('remove-item', { detail: index }));
  }

  render() {
    return html`
      <div class="input-container">
        <newitem-input id="addTodoInput"></newitem-input>

        <main-button
          text="Add"
          customStyledClass="add"
          @click=${this._handleAddNewItem}
        ></main-button>
      </div>

      <list-box name="listbox">
        <ul>
          ${this.todos.map(
            (todo, index) => html`
              <li>
                <span>${todo}</span>
                <main-button
                  @click=${() => this._handleRemoveTodo(index)}
                  customStyledClass="remove"
                >
                  X
                </main-button>
              </li>
            `,
          )}
        </ul>
      </list-box>
    `;
  }
}
