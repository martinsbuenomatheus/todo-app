import { TodoRepository } from "../../Domain/Repository/TodoRepository";
import TodoDataSource from "../DataSource/TodoDataSource";

export class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_datasource: TodoDataSource) {
    this.dataSource = _datasource;
  }

  async getTodos() {
    return this.dataSource.getTodos();
  }

  async createTodo(value: string) {
    return this.dataSource.createTodo(value);
  }

  async markAsRead(id: string) {
    return this.dataSource.toggleTodoCheck(id);
  }

  async removeTodo(id: string) {
    return this.dataSource.removeTodo(id);
  }
}