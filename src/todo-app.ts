import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/todoList.js';
import '@lion/ui/define/lion-button.js';

interface TodoItem {
  text: string;
  completed: boolean;
}

@customElement('todo-app')
export class TodoApp extends LitElement {

  @property({ type: Boolean }) showList = false;
  @property({ type: Array }) todoItems = [
    { text: 'Wash the dishes'},
    { text: 'Buy groceries'},
  ];

  toggleListVisibility() {
    this.showList = !this.showList;
  }

  addNewItem(e: CustomEvent) {
    const item: TodoItem = e.detail;
    this.todoItems = [...this.todoItems, item];
  }
  

  render() {
    return html`
      <lion-button @click=${this.toggleListVisibility.bind(this)}>
        ${this.showList ? 'Hide List' : 'Show List'}
      </lion-button>

      ${this.showList ? html`<todo-list .items=${this.todoItems} @add-item=${this.addNewItem}></todo-list>` : ''}

    `;
  }
}
