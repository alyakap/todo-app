import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/todoList.js';
import './components/main-button.js';

interface TodoItem {
  text: string;
  id: number;
}

@customElement('todo-app')
export class TodoApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #ff9933;
      }

      .container {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 400px;
        height: 300px; /* Set a fixed height */
        overflow-y: auto; /* Enable vertical scrolling */
      }
    `;
  }

  @property({ type: Boolean }) showList = true;
  @property({ type: Array }) todoItems: TodoItem[] = [
    { text: 'Wash the dishes', id: 1 },
    { text: 'Buy groceries', id: 2 },
  ];

  toggleListVisibility = () => {
    this.showList = !this.showList;
  };

  addNewItem = (e: CustomEvent) => {
    const item: TodoItem = e.detail;
    this.todoItems = [...this.todoItems, item];
  };

  removeItem = (e: CustomEvent) => {
    const itemId = e.detail;
    this.todoItems = this.todoItems.filter(item => item.id !== itemId);
  };

  render() {
    return html`
      <div>
        <main-button
          @click=${this.toggleListVisibility}
          customStyledClass=${this.showList ? 'hide' : 'show'}
        >
          ${this.showList ? 'Hide App' : 'Show App'}
        </main-button>

        ${this.showList
          ? html`
              <todo-list
                class="container"
                .items=${this.todoItems}
                @add-item=${this.addNewItem}
                @remove-item=${this.removeItem}
              >
              </todo-list>
            `
          : ''}
      </div>
    `;
  }
}
