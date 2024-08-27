import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/todoList.js';
import './components/main-button.js';

@customElement('todo-app')
export class TodoApp extends LitElement {
  static styles = css`
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

  @property({ type: Boolean }) showList = true;
  @property({ type: Array })
  todos: string[] = [];

  toggleListVisibility = () => {
    this.showList = !this.showList;
  };

  private addTodo = (e: CustomEvent) => {
    const newTodo = e.detail;
    if (newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  };

  private removeTodo = (e: CustomEvent) => {
    const index = e.detail;
    this.todos = this.todos.filter((_, i) => i !== index);
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
                .todos=${this.todos}
                @add-item=${this.addTodo}
                @remove-item=${this.removeTodo}
              >
              </todo-list>
            `
          : ''}
      </div>
    `;
  }
}
