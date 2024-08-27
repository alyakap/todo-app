import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/todoList.js';
import './components/main-button.js';

interface TodoItem {
  text: string;
}

@customElement('todo-app')
export class TodoApp extends LitElement {
  static styles = css`
    :host {
      font-family: 'ING Me Regular', sans-serif;
    }
  `;

  @property({ type: Boolean }) showList = false;
  @property({ type: Array }) todoItems: TodoItem[] = [
    { text: 'Wash the dishes' },
    { text: 'Buy groceries' },
  ];

  toggleListVisibility = () => {
    this.showList = !this.showList;
  };

  addNewItem = (e: CustomEvent) => {
    const item: TodoItem = e.detail;
    this.todoItems = [...this.todoItems, item];
  };

  removeItem = (e: CustomEvent) => {
    const itemText = e.detail;
    this.todoItems = this.todoItems.filter(item => item.text !== itemText);
  };

  render() {
    return html`
      <main-button
        @click=${this.toggleListVisibility}
        customStyledClass=${this.showList ? 'hide' : 'show'}
      >
        ${this.showList ? 'Hide' : 'Show'}
      </main-button>

      ${this.showList
        ? html` <todo-list
            .items=${this.todoItems}
            @add-item=${this.addNewItem}
            @remove-item=${this.removeItem}
          >
          </todo-list>`
        : ''}
    `;
  }
}
